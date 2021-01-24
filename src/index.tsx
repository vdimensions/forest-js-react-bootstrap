// import * as React from 'react'
// import styles from './styles.module.css'

// interface Props {
//   text: string
// }

// export const ExampleComponent = ({ text }: Props) => {
//   return <div className={styles.test}>Example Component: {text}</div>
// }
import ConfirmationDialogFrame from "./ConfirmationDialogFrame";
import DialogSystem from "./DialogSystem";

let _views : React.FC<any>[] = [
  DialogSystem, ConfirmationDialogFrame
];

export default _views;