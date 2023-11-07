import React from 'react'
import { Alumno } from './alumno'

export const Alumnos = ({amigos}) => {
    return (
        <ul>
        {amigos.map((amigo, index) => {
          return <Alumno key={index} nombre={amigo}> </Alumno>
        })}
      </ul>
    )
}