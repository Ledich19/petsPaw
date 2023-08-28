import s from './UploadResult.module.scss';

type UploadResultProps = {
  isSuccess: boolean;
  isError: boolean;
};

const UploadResult = ({ isSuccess, isError }: UploadResultProps) => {
  return (
    <>
      {isSuccess && (
        <div className={s.result}>
          <span className={`${s.green} icon-success`} />
          <div className={s.resultText}>Thanks for the Upload - Cat found!</div>
        </div>
      )}
      {isError && (
        <div className={s.result}>
          <span className={`${s.red} icon-close`} />
          <div className={s.resultText}>No Cat found - try a different one</div>
        </div>
      )}
    </>
  );
};

export default UploadResult;
