import { Head, Nav, Login } from './styles';
import Logo from '../../shared/ui/Logo';

export default function Header() {
    return (
        <Head>
            <Nav>
                <Logo/>
                <Login to={"/login"} className='login'>로그인</Login>
            </Nav>
        </Head>
    )
}