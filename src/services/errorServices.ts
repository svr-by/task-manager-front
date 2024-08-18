import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { ERROR_MES_RUS } from '@/api/errorMessagesRus';

export function showErrorMessage(error: unknown) {
  console.log(error);
  if (error instanceof AxiosError) {
    const serverMes = error.response?.data;
    if (serverMes || typeof serverMes === 'string') {
      console.log(serverMes);
      const rusMessage = ERROR_MES_RUS[serverMes];
      if (rusMessage) {
        toast.error(rusMessage);
        return;
      }
    }
  }
  console.error(error);
  toast.error('Непредвиденная ошибка!');
}
