import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
`;
export const BaseAmountInputContainer = styled.div`
  padding: 9px;
  display: flex;
  background: #212224;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const InputAmountLabelText = styled.div`
  font-size: 18px;
  font-weight: 900; ;
  margin-left: 16px;
  color: #fff;
`;
export const CountryObserverWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const CountryItemWrapper = styled.div`
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  margin: 6px 5px;
  `;
export const CountryItemFlag = styled.div`
border-radius: 6px;
display: flex;
flex:0.1;
justify-content: flex-start;
`;
export const CountryItemName = styled.div`
  display: flex;
  flex:0.7;
  justify-content: center;
  align-items: center;
  `;
export const CountryItemAddButton = styled.div`
  background: #0FA667;
  align-items: center;
  display: flex;
  padding:10px 0px;
  cursor: pointer;
  flex:0.2;
  justify-content: center;
  
  &:hover {
    background: #10B56F;
    
  }
`;

export const InputAmount = styled.input.attrs({
  type: "number",
})`
  width: 50%;
  padding: 18px;
  border: none;
 
`;
export const FlexRow = styled.div`
display: flex;
justify-content: space-around;
align-items: center ;
margin-bottom: 30px;
`
export const SearchCountryInput = styled.input.attrs({
  type: "text",
})`
  width: 90%;
  padding: 12px;
  border-radius: 5px;
  border-color: #ff7759;
`;
export const SearchListWrapper = styled.div`
 display: flex;
 flex-direction: column;
`;
export const SearchList = styled.div`
  padding: 16px;
  flex: 1;
  /* background: #ffdcf0; */
  height: 80vh;
  overflow-y: scroll;
  justify-content: flex-start;
`;
export const ObservationList = styled.div`
  flex: 1;
  padding: 16px;
  background: #eee;
  justify-content: flex-end;
`;
export const Button = styled.div`
  display: inline-block;
  padding: ${({ withIcons }) => (withIcons ? `4px 22px 4px 8px` : `4px 22px`)};
  background: #3851c5;
  opacity: 1;
  color: white;
  border-radius: 15px;
  font-size: 11px !important;
  margin: 0 5px;
  cursor: pointer;
  position: relative;

  .icon {
    height: 1.6em;
    margin-right: 8px;
  }
`;

// Added country Item styles

export const AddedCountryItem = styled.div`

  display: flex;
  flex-direction: row;
  margin: 7px 5px;
  height: 100px;
  background: #fff;
  `;
export const AddedCountryItemFlag = styled.div`
display: flex;
flex:0.1;
background: #e4e4e4;
align-items: center;
justify-content: flex-start;
`;
export const AddedCountryItemBody = styled.div`
  display: flex;
  flex:0.7;
  justify-content: center;
  align-items: center;
  `;
export const AddedCountryName = styled.div`
  align-items: center;
  display: flex;
  padding:10px 0px;
  font-size: 22px;
  font-weight: bold;
  margin-left:15px;
  flex:1;
  justify-content: flex-start;
`;

export const AddedCountryPopulation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding:10px 0px;
  flex:0.6;
  justify-content: center;
  font-weight: bold;
  color: black;
  & span:first-child{
    font-size: 12px;
    color: #888;
  }
`;

export const AddedCountryCurrencies = styled.div`
  align-items: center;
  display: flex;
  padding:10px 0px;
  flex-direction: column;
  flex:1;
  font-weight: bold;
  color: black;
  justify-content: center;
  & span:first-child{
    font-size: 12px;
    color: #888;
  }
`;

export const AddedCountryConvertedAmount = styled.div`
  background: #0FA667;
  align-items: center;
  display: flex;
  padding:10px 0px;
  flex:0.2;
  flex-direction: column;
  justify-content: center;
  color: white;
  & div:first-child{
    font-size: 19px;
    color: white;
  }
`;

export const RemoveCountry = styled.div`
  background: #FF7759;
  align-items: center;
  display: flex;
  padding:10px 0px;
  flex:0.2;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #FF9901;
    
  }
`;
