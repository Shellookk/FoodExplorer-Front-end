import { Container, Form  } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import Logo from "../../assets/imgs/Logo.svg"
export function SignIn() {
  return (
    <Container>

      <div>
        <img src={Logo} alt="Logo" />
      </div>
             
      <Form>
          <h2>Faça login</h2>
          
          <div id="form">
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