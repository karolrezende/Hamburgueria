import { Link, useNavigate } from "react-router-dom"
import { ButtonStyled } from "../Button/ButtonStyled"
import styles from './styles.module.scss'
import * as yup from 'yup'; 
import { useForm } from "react-hook-form"; 
import { yupResolver } from '@hookform/resolvers/yup'; 
import {api} from '../../app/api'
import { toast } from "react-toastify";
import {AxiosError} from 'axios';
import { useContextProvider } from "../../providers/Provider";

interface iPropsForm {
    state: string
}
export default function Form(props: iPropsForm) {
    const { state } = props;
    return (
        <div>
            {state === 'login' && <LoginForm />}
            {state === 'signin' && <SigninForm />}
        </div>
    )
}

function LoginForm() {
    const schema = yup.object().shape({
        email: yup.string().required("Digite seu email").email("Digite um email valido"),
        password: yup.string().required("Digite sua senha"),
    });
    
    
    const { register, handleSubmit, formState:{errors}} = useForm<iLogin>({resolver: yupResolver(schema)})
    
    interface iLogin{
        email: string, 
        password: string
    }
    interface iLoginApi extends iLogin{
        accessToken: string
    }
    const navigate = useNavigate()
    const {setterToken} = useContextProvider()
    async function handleLoginSubmit(data: iLogin){
        const response = await api.post<iLoginApi>('/login',{
            email: data.email,
            password: data.password
        })
        console.log(response.data.accessToken)
        const token = response.data.accessToken
        setterToken({token})
        navigate('/home')
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_mr}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit(handleLoginSubmit)}>
                    <fieldset className={styles.container_mr__email}>
                        <legend>Email</legend>
                        <input type="email" {...register('email')}/>
                    </fieldset>
                    <span>{errors.email?.message}</span>

                    <fieldset>
                        <legend>Senha</legend>
                        <input type="password" {...register('password')} />
                    </fieldset>
                    <span>{errors.password?.message}</span>
                    <div className={styles.button}>
                        <div className={styles.button_1}>
                            <ButtonStyled hover="#93D7AF" fontColor="#FFF" color="#27AE60">Entrar</ButtonStyled>
                        </div>
                        <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>    
                        <div className={styles.button_2}>
                            <Link to={'/cadastro'}><ButtonStyled hover="#828282" fontColor="#828282" color="#E0E0E0">Cadastre-se</ButtonStyled></Link>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

function SigninForm() {
    const schema = yup.object().shape({
        name: yup.string().required("Digite seu nome"),
        email: yup.string().required("Digite seu email").email("Digite um email valido"),
        password: yup.string().required("Digite sua senha").min(6, "Ao menos 6 caracteres"),
        repassword: yup.string().required("Confirme sua senha").oneOf([yup.ref('password') ], "As senhas não combinam"),
    })
    
    interface iSign{
        name: string,
        email: string,
        password:string,
        repassword: string
    }
    type iSignApi = Omit<iSign, 'repassword'>   

    interface iError {
        err: string,
    }
    const { register, handleSubmit, formState:{errors}} = useForm<iSign>({resolver: yupResolver(schema)})

    async function handleSignSubmit(data: iSignApi){
        const response = await api.post<iSignApi>('/users',{
            email: data.email,
            password: data.password,
            name: data.name
        }).catch((err) => {
            console.log(err)
                const currentError = err as AxiosError <iError>
                toast.error(currentError.response?.data.err)
            }
        )
        console.log(response)
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_mr}>
                <div className={styles.container_mr__header}>
                    <h2>Cadastro</h2>
                    <Link to='/' className={styles.container_mr__header_link}>Voltar ao login</Link>
                </div>
                <form onSubmit={handleSubmit(handleSignSubmit)}>
                    <fieldset>
                        <legend>Nome</legend>
                        <input type="text" {...register('name')}/>
                    </fieldset>
                    <span>{errors.name?.message}</span>
                    <fieldset>
                        <legend>Email</legend>
                        <input type="text" {...register('email')}/>
                    </fieldset>
                <span>{errors.email?.message}</span>

                <fieldset>
                    <legend>Senha</legend>
                    <input type="password" {...register('password')} />
                </fieldset>

                <span>{errors.password?.message}</span>

                <fieldset>
                    <legend>Confirmar senha</legend>
                    <input type="password" {...register('repassword')} />
                </fieldset>

                <span>{errors.repassword?.message}</span>

                <div className={styles.button}>
                    <div className={styles.button_1}>
                        <ButtonStyled hover="#93D7AF" fontColor="#FFF" color="#27AE60">Criar conta</ButtonStyled>
                    </div>
                    <p>Já tem conta? Faça login para matar sua fome!</p>    
                    <div className={styles.button_2}>
                       <Link to={'/'}><ButtonStyled hover="#828282" fontColor="#828282" color="#E0E0E0">Voltar ao login</ButtonStyled></Link> 
                    </div>
                </div>
            </form>
        </div>
    </div>
)}




