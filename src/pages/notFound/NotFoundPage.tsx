import { useNavigate } from 'react-router-dom';
import Button from '@mui/material//Button';

import { PATHS } from '@/router/paths';
import { Layout } from '@/components';
import './NotFoundPage.css';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Layout navMenu={false} header={false} footer={false}>
      <div className="not-found-page">
        <h2 className="not-found-page__title">Страница не найдена</h2>
        <Button variant="contained" onClick={() => navigate(PATHS.MAIN)}>
          На главную
        </Button>
      </div>
    </Layout>
  );
}
