import ErrorGenericView from '../view/error-generic.view'

export default function ErrorGenericController() {
  const goToHome = () => {
    alert('Redirecting to home...')
  }

  return <ErrorGenericView goToHome={goToHome} />
}
