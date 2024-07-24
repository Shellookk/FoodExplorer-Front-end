import { Container } from "./styles"
import { Logo } from "../../components/Logo"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
export function SignIn() {
  return (
    <Container>
        <Logo/>
       
        <form>
          <h2>Faça login</h2>
          
          <label htmlFor="Email">Email</label>
          <Input id="Email" placeholder="Exemplo: exemplo@exemplo.com.br" type="email"/>

          <label htmlFor="Senha">Senha</label>
          <Input id="Senha" placeholder="No mínimo 6 caracteres" type="password"/>

          <Button title="Entrar"/>
          
          <ButtonText title="Criar uma conta"/>
      </form>

    </Container>
  )
}