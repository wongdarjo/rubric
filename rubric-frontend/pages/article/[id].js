import Layout from '../../components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useSwr from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Article() {
  const router = useRouter()
  const { data, error } = useSwr(`/api/user/${router.query.id}`, fetcher)

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.name}</div>
}