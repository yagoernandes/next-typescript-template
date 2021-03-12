import Head from 'next/head'
import styled from 'styled-components'
import profilePhoto from '../assets/profile.jpg'

const Title = styled.h1`
  font-size: 72px;
  background: -webkit-linear-gradient(left, #fb1a04, #ef7708, #dacb1b, #9be84b, #1df9c6, #4f98f6, #a540ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>Yago Teste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh'}}>
        <img src={profilePhoto} width={100} height={100} style={{borderRadius:50}} />
        <Title style={{marginTop: 15}}>Template do yagão</Title>
      </div>
    </>
  )
}
