import styles from './styles.module.css'

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section className="pb-4 mt-3">
            <div className='bg-white'>
                <section className='w-100 d-flex justify-content-center align-items-center'>
                    <div className="border rounded border-info p-3">
                        <div className={styles.main}>
                            {children}
                        </div>

                    </div>
                </section>
            </div>
        </section>
    )
}
