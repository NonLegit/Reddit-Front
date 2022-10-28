import { AuthenticationBG, AuthenticationConatiner } from '../components/Authentication/AuthenticationConatiners/styles';
import ForgetUsername from '../components/Authentication/ForgetUsername/ForgetUsername';

function ForgetUsernamePage() {
  return (
    <AuthenticationConatiner>
      <AuthenticationBG />
      <ForgetUsername />
    </AuthenticationConatiner>
  );
}

export default ForgetUsernamePage;
