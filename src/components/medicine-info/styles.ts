import styled from "styled-components";

const Container = styled.div`
  max-width: 1040px;
  width: 100%;
  background-color: var(--color-white);
  padding: 20px;
  border-radius: 16px;
  margin-top: 20px;
  cursor: pointer;
  display: flex;
`;

const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Info = styled.div`
  color: var(--neutral-neutral-5, #858C94);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;

const MedicineTitle = styled.h2`
  color: var(--neutral-black, #09101D);
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
`;

const ContainerPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Status = styled.p`
  color: #01591F;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;

const Price = styled.p`
  width: 100%;
  text-align: center;
  color: #202122;
  font-family: 'Source Sans Pro', sans-serif;
  font-style: normal;
  font-weight: 400;
`;

const AccessLeafletLink = styled.a`
  color: #00577C;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  width: 100%;
  text-align: center;
`;

const AccessLeafletText = styled.span`
  display: flex;
  margin-left: 8px;
`;

const SimilarMedicines = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
  color: #FFF;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
`;

export {
  Container,
  Info,
  MedicineTitle,
  ContainerDescription,
  ContainerPrice,
  Status,
  Price,
  AccessLeafletLink,
  AccessLeafletText,
  SimilarMedicines,
};