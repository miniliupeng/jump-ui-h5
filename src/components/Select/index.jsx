import { Image, Picker } from 'antd-mobile';
import arrowSrc from './assets/arrow.svg';
export const Select = ({ label, value, onChange, options }) => {
  return (
    <>
      <Picker
        columns={options}
        value={value}
        onConfirm={(v) => {
          onChange(v);
        }}
      >
        {(items, { open }) => {
          const selectValue = items[0];
          return (
            <div
              className="flex items-center px-[8px] h-[40px] border border-[var(--jp-border-color)] bg-[var(--jp-background-second-color)]"
              onClick={open}
            >
              {selectValue ? (
                <>
                  {selectValue.icon && (
                    <Image src={selectValue.icon} width={24} />
                  )}
                  <span className='flex-1 ml-[8px]'>{selectValue.label}</span>
                  <Image src={arrowSrc} width={16} />
                </>
              ) : (
                <>
                  <span className="flex-1 text-[var(--jp-placeholder-color)]">
                    请选择{label}
                  </span>
                  <Image src={arrowSrc} width={16} />
                </>
              )}
            </div>
          );
        }}
      </Picker>
    </>
  );
};
