import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
`

export const Main = styled.div`
  width: 1000px;
  background: #fff;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px){
    width: 95%;
  }
`

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background: #F4DD4F;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const H2 = styled.h2`
  font-size: 1.8rem;
`

export const Body = styled.div`
  width: 80%;
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1000px){
    width: 90%;
  }
`

export const Block = styled.div`
  width: 100%;
  height: 100px;
  background: #f7f7f7;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`

export const BlockLeft = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (max-width: 500px){
    font-size: 1.3rem;
  }
`

export const BlockRight = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 50px;
`

export const CourseName = styled.h3`
  font-size: 1.4rem;
  direction: rtl;

  @media screen and (max-width: 500px){
    font-size: 1.1rem;
  }
`

export const Verify = styled.div`
  cursor: pointer;
  width: 250px;
  height: 80px;
  background: #F4DD4F;
  border-radius: 10px;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`

export const NoOrder = styled.div`
  width: 90%;
  height: 80px;
  background: #f44336;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 50px;
  border-radius: 10px;
  font-size: 1.3rem;
  font-weight: bold;
  color: #fff;

  @media screen and (max-width: 1000px){
    padding-right: 10px;
  }
`

export const PBlock = styled.div`
  width: 100%;
  height: 80px;
  background: #eee;
  margin: 0 auto;
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`

export const Pleft = styled.div`
  direction: rtl;
  font-size: 1.1rem;
`

export const Pright = styled.div`
  direction: rtl;
  font-size: 1.3rem;
`