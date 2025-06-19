import { useState, useEffect } from 'react'
import { Head, Nav, Login, Img } from './styles';
import Logo from '../../shared/ui/Logo';

type User = {
  email: string;
  name: string;
  picture: string;
};

export default function Header() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    }, []);

  const handleLogin = () => {
    const popup = window.open('http://localhost:4000/auth/google', 'Google Login', 'width=500,height=600');

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'http://localhost:4000') return;
      setUser(event.data);
      localStorage.setItem('user', JSON.stringify(event.data));
      window.removeEventListener('message', handleMessage);
    };

    window.addEventListener('message', handleMessage);
  };

    return (
        <Head>
            <Nav>
                <Logo/>
                {user ? (
                    <Img src={user.picture} alt="profile" className="profile-img" />
                ) : (
                    <Login onClick={handleLogin} className="login">로그인</Login>
                )}
            </Nav>
        </Head>
    )
}