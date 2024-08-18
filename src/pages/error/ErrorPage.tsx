import { useNavigate } from 'react-router-dom';
import Button from '@mui/material//Button';

import { PATHS } from '@/router/paths';
import { Layout } from '@/components';
import './ErrorPage.css';

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Layout navMenu={false} header={false} footer={false}>
      <div className="error-page">
        <h2 className="error-page__title">Что-то пошло не так!</h2>
        <p className="error-page__message">
          Попробуйте обновить страницу или свяжитесь с администратором.
        </p>
        <Button variant="contained" onClick={() => navigate(PATHS.MAIN)}>
          На главную
        </Button>
      </div>
    </Layout>
  );
}
