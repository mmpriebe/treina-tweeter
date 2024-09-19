import styles from './App.module.css'
import Index from "./pages"

function App() {
  return (
    // jsx uppercase component name
    <div className={styles.appContainer}>
      <Index/>
    </div>
  )
}

export default App
