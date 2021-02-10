import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 500px;
  

  form{
    display: flex;
    flex-direction: column;
    
    min-width: 500px;

    div{
      display: flex;
      flex-direction: column;

      padding: 15px;
    
      input{
        margin-top: 10px;

        display: flex;

        border-top: 0;
        border-bottom: 1px solid #000;
        border-left: 0;
        border-right: 0;

        ::placeholder{
          text-align: left;
        }
      }
    }

    button {
      border: none;

      align-items: center;
      justify-content: center;

      color: #000;
    }
  }
`;
