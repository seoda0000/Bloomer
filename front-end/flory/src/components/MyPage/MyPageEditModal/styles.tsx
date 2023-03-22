import styled from "styled-components"

export const SForm = styled.form`
  /* width: 90%; */
  /* margin: auto; */


  .nickname__wrapper {
    display: flex;
    gap: 10px;
    padding-bottom: 0.3rem;
    border-bottom: 3px solid #dec5fd;
    align-items: center;

    .input__section {
      width: 100%;
      border: none;
    }
  }

  .image__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* grid-template-columns: 5rem 5rem 5rem; */
    gap: 1.2rem;
    justify-content: center;

    .image__btn {
      cursor: pointer;
      position: relative;
    }
    .image__btn:hover {
      transform: scale(1.05);
    }
  }

  .cameraButtonImg{
    width: 2.5vh;
    position: absolute;
    left: 6.5vh;
    bottom: 0.3vh;
  }
`

export const ImgIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  postion: relative;

  .modifyButtonImg{
    width: 6.5vh;
    position: absolute;
    left: 55%;
  }
`;
