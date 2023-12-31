import { transparentize } from 'polished';
import styled from 'styled-components';

interface IStatusProps {
    isOpen: boolean;
}

interface IStatusPopUpProps {
    isActive: boolean;
}

interface IStatusTypeIndicatorProps {
    color: string;
}

export const StatusPopUpContainer = styled.div<IStatusPopUpProps>`
    z-index: 1000;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    position: fixed;
    bottom: 10rem;
    left: ${({ isActive }) => (isActive ? '0' : '-100%')};
    transition: 0.3s all ease-in-out;

    color: ${({ theme }) => theme.text.normal};

    background: ${({ theme }) => transparentize(0.5, theme.white)};
    backdrop-filter: blur(20px);
    padding: 0.75rem;
    border-radius: 0 ${({ theme }) => theme.borderRadius}
        ${({ theme }) => theme.borderRadius} 0;
    border: 1px solid ${({ theme }) => theme.gray200};
    border-left: none;

    div {
        display: flex;
        gap: 0.5rem;
    }
`;

export const StatusTypeIndicator = styled.div<IStatusTypeIndicatorProps>`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${({ color }) => color};
`;

export const StatusPopUpLabel = styled.span<IStatusProps>`
    display: flex;
    align-items: center;
    line-height: 1;
    transition: all 0.3s ease-in-out;
    font-size: ${({ isOpen }) => (isOpen ? '0.75rem' : '0rem')};
`;
