import styled from "styled-components";

export const HomeContainerFlex = styled.div`
  display: -webkit-flex;
  display: flex;
`;

export const HomeMain = styled.main`
  display: -ms-grid;
  display: -moz-grid;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  row-gap: 40px;
  column-gap: 16px;
  flex-grow: 1;
  margin: 24px 16px;

  @media screen and (min-width: 1634px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

    &.collapse {
      justify-content: center;
      grid-template-columns: repeat(auto-fit, minmax(283px, 359px));
    }
  }
`;

export const SidebarStyle = styled.aside`
  flex-grow: 1;
  max-width: 240px;
  flex-basis: 240px;
  flex-shrink: 0;
  background-color: white;
  @media screen and (min-width: 1329px) {
    &.collapse {
      max-width: 70px;
      flex-basis: 70px;
      main {
        max-width: 90%;
        margin: auto;
      }
      nav {
        ul li a {
          padding-left: 0;
          padding-right: 0;
          flex-wrap: wrap;
          justify-content: center;
          text-align: center;
          svg,
          span {
            flex-grow: 1;
            display: block;
            font-size: 10px;
            line-height: 18px;
          }
        }
      }

      ul li.icon {
        display: none;
      }
    }
  }
  &.mobile-sidebar {
    display: none;
    z-index: 2020;
    position: fixed;
    min-width: 240px;
    max-width: 240px;
    min-height: 100vh;
    /* overflow-y: auto; */
    background-color: white;
    top: 0;
    left: 0;
    margin: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    &:after {
      position: fixed;
      content: "";
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: -1;
    }

    nav {
      background-color: white;
      height: 100vh;

      ul li a {
        flex-wrap: nowrap;
        display: -webkit-flex;
        display: flex;
        align-items: center;
        column-gap: 24px;
        padding: 8px 24px;
        text-align: left;
      }
    }
    span,
    h3,
    p {
      font-size: 14px !important;
      line-height: 18px !important;
      font-weight: 400 !important;
    }
    h3,
    p {
      padding-left: 24px !important;
    }

    ul li.icon,
    ul li a span {
      display: block;
    }
  }
  @media screen and (max-width: 1312px) {
    &.mobile-sidebar--active {
      display: block;
    }
    max-width: 70px;
    flex-basis: 70px;
    main {
      max-width: 90%;
      margin: auto;
    }
    nav {
      ul li a {
        padding-left: 0;
        padding-right: 0;
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
        svg,
        span {
          flex-grow: 1;
          display: block;
          font-size: 10px;
          line-height: 18px;
        }
      }
    }

    ul li.icon {
      display: none;
    }
  }
  @media screen and (max-width: 807px) {
    display: none;
  }
`;

export const SidebarList = styled.li`
  a {
    display: -webkit-flex;
    display: flex;
    align-items: center;
    column-gap: 24px;
    padding: 8px 24px;
    transition: all 0.3s;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      transition: all 0.3s;
      background-color: #f2f2f2;
    }
  }

  button {
    background-color: white;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    column-gap: 8px;
    border: 1px solid #065fd4;
    color: #065fd4;
    margin-top: 12px;
    margin-left: 24px;
    margin-bottom: 16px;
    height: 36px;
    padding: 0 6px;
    cursor: pointer;
  }
  &:first-of-type {
    a {
      background-color: #e5e5e5;
      transition: all 0.3s;
      &:hover {
        transition: all 0.3s;
        background-color: #d9d9d9;
      }
    }
  }
  p {
    max-width: 176px;
  }
  span,
  h3,
  p {
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }
  h3,
  p {
    padding-left: 24px;
  }
  div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  img {
    height: 24px;
    width: 24px;
    border-radius: 50%;
    object-fit: contain;
  }
`;

export const SidebarListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  li:last-of-type {
    margin-bottom: 40px;
  }
  overscroll-behavior-inline: contain;
  align-items: center;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TextH3 = styled.h3`
  margin: 12px 0 4px 0;
  font-size: 15px;
  line-height: 22px;
  padding: 0;
  max-height: 4.4rem;
  overflow: hidden;
  display: block;
  -webkit-line-clamp: 2;
  display: box;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
  color: #030303;
`;

export const ProfileImg = styled.img<{ imgWidth: string; imgHeight: string }>`
  width: ${({ imgWidth }) => imgWidth};
  height: ${({ imgHeight }) => imgHeight};
  object-fit: cover;
  border-radius: 50%;
`;

export const TextSpan = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #606060;
  &.view {
    position: relative;
    padding-right: 14px;
    display: inline-block;
    &:after {
      position: absolute;
      content: "•";
      right: 2px;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const ButtonStyle = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  position: relative;
`;

export const LinkStyle = styled.a`
  display: block;
  cursor: pointer;
  text-decoration: none;
`;

export const SearchDivStyle = styled.div`
  flex-grow: 1;
  flex-basis: 182px;
  max-width: 644px;
  form {
    width: 100%;
  }
  button {
    &:first-of-type {
      height: 40px;
      max-width: 64px;
      width: 100%;
      border: 1px solid hsl(0, 0%, 80%);
      border-left: transparent;
      border-radius: 0 2px 2px 0;
      background-color: #f8f8f8;
      transition: all 0.3s;
      &:hover {
        transition: all 0.3s;
        background-color: #efefef;
      }
    }
    &:last-of-type {
      height: 40px;
      width: 48px;
      margin-left: 4px;
      background-color: #f9f9f9;
      border-radius: 50%;
      transition: all 0.3s;
      &:focus {
        transition: all 0.3s;
        background-color: #efefef;
        background-color: rgba(0, 0, 0, 0.1);
      }
    }
  }
  @media screen and (max-width: 651px) {
    display: none;
  }
`;
export const NavBtnStyle = styled.button`
  background-color: white;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  column-gap: 8px;
  border: 1px solid #065fd4;
  color: #065fd4;
  height: 36px;
  padding: 0 6px;
  flex-shrink: 0;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    &.hide-mobile {
      display: none;
    }
  }
`;
export const SubNavStyle = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 12px;
  a:first-of-type {
    background-color: #030303;
    color: white;
  }
  div {
    max-width: calc(100% - 0px);
    min-width: 80%;
    margin: auto;
    overflow-x: auto;
    width: 100%;
    overscroll-behavior-inline: contain;
    align-items: center;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  a {
    font-size: 14px;
    padding: 6px 12px;
    border-radius: 16px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.05);
    color: #030303;
  }
`;

export const EmptyContainerStyle = styled.div`
  button {
    position: relative;
    &:after {
      content: "";
      position: absolute;
      border: 1px solid rgba(0, 0, 0, 1);
      left: 0;
      top: 0;
      border-radius: 50%;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.5s;
    }
    &:active:after {
      position: absolute;
      border-radius: 50%;
      left: 0;
      top: 0;
      opacity: 1;
      transition: 0s;
      background-color: rgba(0, 0, 0, 0.1);
      border: none;
    }
  }
  &.mobile {
    display: none;
  }
  @media screen and (max-width: 600px) {
    &.mobile {
      display: flex;
    }
    &.hide-mobile {
      display: none;
    }
  }
`;

export const InputStyle = styled.input`
  color: hsl(0, 0%, 6.7%);
  border: 1px solid hsl(0, 0%, 80%);
  -webkit-appearance: none;
  -webkit-font-smoothing: antialiased;
  background-color: #ffffff;
  box-shadow: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-left: 4px;
  max-width: 100%;
  outline: none;
  width: 100%;
  height: 40px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 2px 0 0 2px;
  transition: all 0.3s;
  &:focus {
    transition: all 0.3s;
    border: 1px solid #4080bf;
  }
`;

export const SpinnerStyle = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 3px solid #606060;
  border-radius: 50%;
  border-top-color: #f9f9f9;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
export const BtnStyle = styled.button`
  border: none;
  background-color: #efefef;
  cursor: pointer;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  column-gap: 12px;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 6px;
  flex-basis: 140px;
`;
export const HoverStyle = styled.div`
  &.no-hover {
    /* transition: all 0.3s;
    animation-name: reverseScale;
    animation-duration: 0.4s; */
  }
  .card-body {
    padding: 0;
    /* transition-duration: 0.4s;
    transition-property: padding; */
  }
  .footer {
    opacity: 0;
    background-color: white;
    width: calc(100% - 24px);
    left: 0;
    /* transition-duration: 0.4s;
    transition-property: opacity, margin-bottom; */
    /* margin-bottom: -30px; */
  }

  &.hovered {
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
    animation-delay: 1s;
    animation-name: scale;
    animation-timing-function: ease-in-out;
    background-color: white;
    /* prevents hovering on div beside  */
    /* &:after {
      position: absolute;
      content: "";
      z-index: -1;
      height: calc(100% + 00px);
      width: calc(100% + 70px);
      top: -20px;
      left: -37px;
    } */
    .footer {
      opacity: 1;
      transition-delay: 1s;
      transition-duration: 0.4s;
      transition-property: opacity, margin-bottom;
      margin-bottom: 0px;
    }
    .card-body {
      padding: 0 12px;
      transition-delay: 1s;
      transition-duration: 0.4s;
      transition-property: padding;
    }
  }
  @keyframes scale {
    from {
      z-index: 1000;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      box-shadow: none;
      position: absolute;
    }
    to {
      z-index: 1000;
      height: calc(100% + 60px);
      width: calc(100% + 60px);
      top: -15px;
      left: -30px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      position: absolute;
    }
  }
  @keyframes reverseScale {
    from {
      z-index: 1000;
      height: calc(100% + 60px);
      width: calc(100% + 60px);
      top: -15px;
      left: -30px;
      position: absolute;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    to {
      z-index: auto;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      box-shadow: none;
    }
  }
  @media screen and (max-width: 547px) {
    &.hovered,
    .card-body {
      animation: none;
    }
    .footer {
      display: none;
    }
    .card-body {
      padding: 0;
    }
  }
`;
export const ImageStyle = styled.img`
  max-width: 100%;
  height: auto;
  width: 100%;
  object-fit: cover;
  background-color: #f9f9f9;
`;

export const NavFlexStyle = styled.nav`
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 56px;
  padding: 0 24px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2000;
  @media screen and (max-width: 600px) {
    box-shadow: 0 4px 2px -2px rgb(0 0 0 / 20%);
  }
`;

export const ItemFlexStyle = styled.div<{ rowGap: string; columnGap: string }>`
  display: -webkit-flex;
  display: flex;
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
`;

// export const SkeletonStyle = styled.section`
//   display: -ms-grid;
//   display: -moz-grid;
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   row-gap: 40px;
//   column-gap: 16px;
//   @media screen and (min-width: 1634px) {
//     grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
//   }
// `;

export const SkeletonCardStyle = styled.div`
  display: grid;
  row-gap: 16px;
`;

export const SkeletonItemStyle = styled.div<{
  itemWidth: string;
  itemHeight: string;
  itemRadius: string;
}>`
  background-color: #e0e0e0;
  width: ${({ itemWidth }) => itemWidth};
  height: ${({ itemHeight }) => itemHeight};
  border-radius: ${({ itemRadius }) => itemRadius};
`;
