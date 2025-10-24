import styled from 'styled-components';
import { MdKeyboardArrowRight , MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`;

export const VideoWrapper = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    left: 10px;
    height: 100vh;
    max-height: calc(100vh - 40px);
    overflow: hidden;
    border-radius: 24px;
    border: 0.1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
                    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 80%);
        z-index: 2;
    }

    @media screen and (max-width: 768px) {
        top: 15px;
        right: 15px;
        left: 15px;
        height: 85vh;
        max-height: calc(100vh - 80px);
        border-radius: 16px;
        border-width: 2px;
    }

    @media screen and (max-width: 480px) {
        top: 10px;
        right: 10px;
        left: 10px;
        height: 85vh;
        max-height: calc(100vh - 60px);
        border-radius: 12px;
        border-width: 2px;
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 24px;
    padding-left: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (max-width: 768px) {
        padding-left: 30px;
    }

    @media screen and (max-width: 480px) {
        padding-left: 20px;
    }
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: left;

    @media screen and (max-width: 768px) {
        font-size: 44px;
    }

    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: left;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 30px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 30px;
`;