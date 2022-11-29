import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 90%;
  max-width: 1110px;
  margin: auto;

  @media screen and (min-width: 992px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const LoginWebsiteLogoMobileImg = styled.img`
  width: 165px;
  margin-top: 50px;
  margin-bottom: 35px;

  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const LoginImg = styled.img`
  width: 278px;

  @media screen and (min-width: 992px) {
    width: 60%;
    max-width: 524px;
    flex-shrink: 1;
    margin-right: 20px;
  }
`

export const LoginWebsiteLogoDesktopImg = styled.img`
  width: 185px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 350px;

  @media screen and (min-width: 992px) {
    width: 350px;
    flex-shrink: 0;
    box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
    padding: 64px 48px 64px 48px;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const InputLabel = styled.label`
. 
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
  `

export const UsernameInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const PasswordInputField = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #d7dfe9;
  background-color: #e2e8f0;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`

export const ShowPasswordContainer = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #0b69ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  outline: none;
`

export const ErrorMessage = styled.p`
  align-self: start;
  font-size: 12px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 16px;
  color: #ff0b37;
`
