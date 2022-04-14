import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Flex, Icon } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '~/components/Form/Button';
import { Input } from '~/components/Form/Input';
import { Select } from '~/components/Form/Select';
import { httpClient } from '~/services/api-client';
import {
  getAllStates,
  getAllCitiesOfState,
} from '~/services/ibgeLocales-client/';

interface userRegister {
  email: string;
  name: string;
  password: string;
  passwordConfirm: string;
  state: string;
  city: string;
  userType: string;
}

export function Register() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState<{ id: string; name: string }[]>([]);
  const [cities, setCities] = useState<{ id: string; name: string }[]>([]);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email('O email deve ser válido')
      .required('O email é obrigatório'),
    name: yup.string().required('O nome é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password'), null], 'As senhas devem ser iguais')
      .required('A confirmação senha é obrigatória'),
    state: yup.string().required('O estado é obrigatório'),
    city: yup.string().required('A cidade é obrigatória'),
    userType: yup.string().required('O tipo de usuário é obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(formSchema),
  });

  const registerUser = async ({
    email,
    name,
    password,
    passwordConfirm,
    state,
    city,
    userType,
  }: userRegister) => {
    setIsLoading(true);
    // const response = await httpClient({
    //   url: '/register',
    //   method: 'post',
    //   body: { email, password, passwordConfirm, state, city, userType },
    // });

    // if (response.isSucceeded) {
    //   toast.success('Cadastrado com sucesso!');
    //   history.push('/');
    // } else {
    //   toast.error('Ocorreu um erro ao cadastrar o usuário');
    // }

    toast.success('Cadastrado com sucesso!');
    history.push('/');

    setIsLoading(false);
  };

  const setupStates = async () => {
    const allStates = await getAllStates();

    if (allStates.isSucceeded) {
      const formatedStates = allStates.body?.map(state => {
        return { id: state.sigla, name: state.nome };
      });

      if (formatedStates) setStates(formatedStates);
    }
  };

  const setupCities = async (state: string) => {
    const allCities = await getAllCitiesOfState(state);

    if (allCities.isSucceeded) {
      const formatedCities = allCities.body?.map(city => {
        return { id: city.nome, name: city.nome };
      });

      if (formatedCities) setCities(formatedCities);
    }
  };

  useEffect(() => {
    setupStates();
  }, []);

  return (
    <Flex
      as="form"
      flexDirection="column"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
      mt="5"
      w="100%"
      h="100%"
      onSubmit={handleSubmit(registerUser)}
    >
      <Flex justify="center" align="center" w="100%" mb="2" gridGap="2">
        <Icon
          as={FaArrowCircleLeft}
          ml="-2"
          onClick={() => history.push('/')}
          cursor="pointer"
        />
        <Flex fontWeight="bold" fontSize="20" justify="center" align="center">
          CADASTRO
        </Flex>
      </Flex>

      <Flex flexDir="row" gridGap="10" w="100%" justify="space-between">
        <Input
          type="text"
          label="Email"
          mb="2"
          error={errors.email}
          {...register('email')}
        />

        <Input
          type="text"
          label="Nome"
          mb="2"
          error={errors.name}
          {...register('name')}
        />
      </Flex>

      <Flex flexDir="row" gridGap="10" w="100%" justify="space-between">
        <Input
          type="password"
          label="Senha"
          mb="2"
          error={errors.password}
          {...register('password')}
        />

        <Select
          label="Estado"
          mb="2"
          error={errors.state}
          data={states || undefined}
          {...register('state', {
            onChange: e => {
              setupCities(e.target.value);
            },
          })}
        />
      </Flex>

      <Flex flexDir="row" gridGap="10" w="100%" justify="space-between">
        <Input
          type="password"
          label="Confirmar Senha"
          mb="2"
          error={errors.passwordConfirm}
          {...register('passwordConfirm')}
        />

        <Select
          label="Cidade"
          mb="2"
          error={errors.city}
          data={cities || undefined}
          isDisabled={!(cities.length > 0)}
          {...register('city')}
        />
      </Flex>

      <Select
        label="Tipo de usuário"
        mb="2"
        error={errors.userType}
        data={[
          { id: 'user', name: 'Paticipante de eventos' },
          { id: 'host', name: 'Host de eventos' },
        ]}
        {...register('userType')}
      />
      <Button
        w="100%"
        mt="10"
        mb="2"
        minH="10"
        type="submit"
        textTransform="uppercase"
        maxW="xs"
        isLoading={isLoading}
      >
        Cadastrar
      </Button>
    </Flex>
  );
}
