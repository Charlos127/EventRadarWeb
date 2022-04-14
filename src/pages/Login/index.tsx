import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaLock } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { Flex, Image, Icon } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button } from '~/components/Form/Button';
import { Input } from '~/components/Form/Input';
import { useAuth } from '~/hooks/auth';
import { Images } from '~/variables';

export function Login() {
  const history = useHistory();
  const { signIn, isLoading } = useAuth();
  const { Logo } = Images;

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email('O email deve ser válido')
      .required('O email é obrigatório'),
    password: yup.string().required('A senha é obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    resolver: yupResolver(formSchema),
  });

  return (
    <Flex flexDir="column">
      <Flex mt="2" justify="center" align="center" w="100%" h="120">
        <Image src={Logo} h="100%" w="100%" />
      </Flex>
      <Flex
        as="form"
        flexDirection="column"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
        mt="12"
        onSubmit={handleSubmit(signIn)}
      >
        <Input
          type="text"
          label="Email"
          mb="6"
          icon={<Icon as={FaUser} />}
          error={errors.email}
          {...register('email')}
        />
        <Input
          type="password"
          label="Senha"
          mb="6"
          icon={<Icon as={FaLock} />}
          error={errors.password}
          {...register('password')}
        />

        <Button
          isLoading={isLoading}
          w="100%"
          mb="6"
          minH="10"
          type="submit"
          textTransform="uppercase"
        >
          Entrar
        </Button>
        <Button
          w="100%"
          mb="6"
          minH="10"
          textTransform="uppercase"
          onClick={() => history.push('/register')}
        >
          Criar conta
        </Button>
      </Flex>
    </Flex>
  );
}
