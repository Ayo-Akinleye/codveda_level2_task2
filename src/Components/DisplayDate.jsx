const DisplayDate = () => {
    return (
        <h3 className='font-semibold text-lg'>
            {new Date().toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
            })}
        </h3>
    )
}

export default DisplayDate