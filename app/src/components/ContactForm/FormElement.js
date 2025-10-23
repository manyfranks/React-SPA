import styled from 'styled-components';

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 0; // Remove padding
    }
`;

export const Form = styled.form`
    max-width: 600px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 768px) {
        padding: 32px 0; // Change padding to 32px top and bottom, 0 left and right
        box-shadow: none;
        border: none;
    }

    @media screen and (max-width: 400px) {
        padding: 32px 0; // Change padding to 32px top and bottom, 0 left and right
    }
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #000;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
`;

export const FormTextArea = styled.textarea`
    padding: 16px 16px;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9); // match Form box-shadow
    width: 100%;
`;

export const FormSelect = styled.select`
    padding: 16px 16px;
    margin-bottom: 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9); // match Form box-shadow
    width: 100%;
`;

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #000;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 16px;
    color: #fff;
    font-size: 14px;
`

export const FormH1 = styled.h1`
    margin-bottom: 16px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    padding: 0 10px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
				padding: 0;
    }
`;

export const HalfWidthInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 8px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    width: 100%;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const InfoContainer = styled.div`
    color:#fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};

    @media screen and (max-width:768px) {
        padding: 100px 0;
				padding-bottom: 250px;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const Column3 = styled.div`
    padding: 5px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;