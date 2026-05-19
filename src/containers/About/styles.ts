import styled from 'styled-components';

export const GithubSecao = styled.div`
  margin-top: 32px;
  margin-bottom: 64px;
  text-align: center;

  img {
    height: 157px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    img {
      height: auto;
      width: 100%;
    }
  }
`;
