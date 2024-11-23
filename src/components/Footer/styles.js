import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  margin: auto;
  background-color: #000;
  padding: 30px 0;
  color: #ffffff;
  .footer-title {
    color: #f0a500;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .footer-list {
    list-style: none;
    padding: 0;
    cursor: pointer;
  }

  .footer-list li {
    margin: 5px 0;

    a {
      text-decoration: none;
      color: #fff;
    }
  }

  .footer-list li:hover {
    opacity: 0.6;
  }

  .footer-social {
    list-style: none;
    padding: 0;
    display: flex;
  }

  .footer-social li {
    margin-right: 10px;
  }

  .footer-social li a img {
    width: 30px;
    height: 30px;
  }

  .footer-bottom {
    margin-top: 20px;
    border-top: 1px solid #333;
    padding-top: 10px;
  }

  .footer-bottom p {
    margin: 0;
    font-size: 14px;
    display: flex;
    justify-content: center;
  }

  .footer-list span::after,
  .footer-social span::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    left: 0;
    background: #fff;
    transition: width 0.3s ease;
  }

  .footer-list span:hover::after,
  .footer-social span:hover::after {
    width: 100%;
  }
`
