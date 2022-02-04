
export const validate = e => {
    if (e.target.value) {
        if (e.target.value.length < 2) return <p className='error'>Поле не может быть меньше двух символов!</p>
        return null
    } else {
        return <p className='error'>Это поле обязательное</p>
    }
}
