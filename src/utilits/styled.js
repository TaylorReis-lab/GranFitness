import styled from "styled-components";

export const CollapseContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
`

export const SectionQuestions = styled.div`
  padding: 15px;
  background-color: #5c5c5cc0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h6 {
    margin: 0;
    font-weight: bold;
  }

  i {
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }

  &:hover {
    color: #f0a500;
  }
`

export const Content = styled.div`
  padding: 15px;
  background-color: #5c5c5cc0;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`