import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 50%;
  margin-bottom: 15px;

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  user-select: none;
 
  input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

input:checked ~ .checkmark {
  background-color: var(--red-900);
  border-color: var(--red-900);
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border: 2px solid #ccc;
  border-radius: 50%;

  @media (max-width: 450px) {
    height: 15px;
    width: 15px;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: white;
  transform: translate(-50%, -50%);
}

input:checked ~ .checkmark:after {
  display: block;
}
`;

export const OptionPlanet = styled.p`
  font-size: 20px;
  color: var(--white);
  font-weight: bold;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
export const ContainerRadio = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
`;
export const ContainerAddress = styled.div`
  display: flex;
  gap: 16px;
`;
