import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getStudents } from './mock-data/data'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tr}>
              <th className={styles.th}>ID</th>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {getStudents().map(student => (
              <tr className={styles.tr} key={student.id}>
                <td className={styles.td}>{student.id}</td>
                <td className={styles.td}>{student.name}</td>
                <td className={styles.td}>
                  <Link href={`/student/${encodeURIComponent(student.id)}`}>
                    <a>Show</a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
