import { Container, Form  } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import Logo from "../../assets/imgs/Logo.svg"



export function SignUp() {
  return (
    <Container>

      <div id="imagem">
        <img src={Logo} alt="Logo" />
      </div>
             
      <Form>
          <h2>Crie sua conta</h2>
          
          <div id="form">
            <label htmlFor="Nome">Seu nome</label>
            <Input id="Nome" placeholder="Exemplo: Maria da Silva" type="text"/>  

            <label htmlFor="Email">Email</label>
            <Input id="Email" placeholder="Exemplo: exemplo@exemplo.com.br" type="email"/>

            <label htmlFor="Senha">Senha</label>
            <Input id="Senha" placeholder="No mínimo 6 caracteres" type="password"/>  
          </div>

          <Button title="Entrar" id="Entrar"/>
          
          <ButtonText title="Criar uma conta" />
      </Form>

    </Container>
  )
}