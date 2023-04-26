import { ReactNode } from 'react'
import { ButtonStyled } from './ButtonStyled'

interface iPropsButton{
   // click:,
    color: string,
    fontColor: string,
    hover: string,
    children: ReactNode,
}
export default function Button({/*click,*/ color, fontColor,hover, children}: iPropsButton) {
  return (
    <ButtonStyled color={color} fontColor={fontColor} hover={hover}/*onClick={()=>click()}*/>{children}</ButtonStyled>
  )
}
