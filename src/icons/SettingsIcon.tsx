import React from 'react';

type propsType = {
    color: string
}

const SettingsIcon = (props: propsType) => {
    return (

        <svg width='19' height='20' viewBox='0 0 19 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M6.88559 2.36754L6.41125 2.20943L6.41125 2.20943L6.88559 2.36754ZM6.47007 3.61412L6.67538 4.07003L6.87513 3.98007L6.94441 3.77224L6.47007 3.61412ZM5.24841 4.32071L5.14817 4.81056L5.36316 4.85455L5.54109 4.7261L5.24841 4.32071ZM3.95947 4.05695L3.85923 4.54679L3.95947 4.05695ZM1.82646 5.01634L2.25947 5.26634L1.82646 5.01634ZM1.26797 5.98366L1.70099 6.23366L1.26797 5.98366ZM1.50362 8.3106L1.87772 7.97886H1.87772L1.50362 8.3106ZM2.37651 9.29497L2.87402 9.34472L2.8958 9.12697L2.75061 8.96323L2.37651 9.29497ZM2.37651 10.705L2.75061 11.0368L2.8958 10.873L2.87402 10.6553L2.37651 10.705ZM1.50362 11.6894L1.12952 11.3577H1.12952L1.50362 11.6894ZM1.26797 14.0163L1.70099 13.7663L1.26797 14.0163ZM1.82645 14.9837L2.25947 14.7337L1.82645 14.9837ZM3.95947 15.9431L3.85923 15.4532H3.85923L3.95947 15.9431ZM5.24841 15.6793L5.54109 15.2739L5.36317 15.1454L5.14817 15.1894L5.24841 15.6793ZM6.47007 16.3859L6.94441 16.2278L6.87513 16.0199L6.67538 15.93L6.47007 16.3859ZM6.88559 17.6325L6.41125 17.7906L6.88559 17.6325ZM11.7973 17.6325L11.3229 17.4743L11.7973 17.6325ZM12.2128 16.3859L12.0075 15.93L11.8078 16.0199L11.7385 16.2278L12.2128 16.3859ZM13.4345 15.6793L13.5347 15.1894L13.3197 15.1454L13.1418 15.2739L13.4345 15.6793ZM14.7234 15.9431L14.6232 16.4329H14.6232L14.7234 15.9431ZM16.8564 14.9837L16.4234 14.7337L16.8564 14.9837ZM17.4149 14.0163L17.8479 14.2663L17.4149 14.0163ZM17.1793 11.6894L16.8052 12.0211V12.0211L17.1793 11.6894ZM16.3064 10.705L15.8089 10.6553L15.7871 10.873L15.9323 11.0368L16.3064 10.705ZM16.3064 9.29497L15.9323 8.96323L15.7871 9.12697L15.8089 9.34472L16.3064 9.29497ZM17.1793 8.3106L17.5534 8.64233L17.1793 8.3106ZM17.4149 5.98366L16.9819 6.23366L16.9819 6.23366L17.4149 5.98366ZM16.8564 5.01634L17.2894 4.76634V4.76634L16.8564 5.01634ZM14.7234 4.05695L14.6232 3.5671L14.7234 4.05695ZM13.4345 4.32071L13.1418 4.7261L13.3197 4.85455L13.5347 4.81056L13.4345 4.32071ZM12.2128 3.61412L11.7385 3.77224L11.8078 3.98007L12.0075 4.07003L12.2128 3.61412ZM11.7973 2.36754L11.3229 2.52566V2.52566L11.7973 2.36754ZM7.35994 2.52566C7.56411 1.91315 8.13731 1.5 8.78296 1.5V0.5C7.70688 0.5 6.75154 1.18858 6.41125 2.20943L7.35994 2.52566ZM6.94441 3.77224L7.35994 2.52566L6.41125 2.20943L5.99573 3.45601L6.94441 3.77224ZM5.54109 4.7261C5.89433 4.47107 6.2741 4.25074 6.67538 4.07003L6.26475 3.15822C5.80137 3.3669 5.36313 3.6212 4.95574 3.91532L5.54109 4.7261ZM3.85923 4.54679L5.14817 4.81056L5.34865 3.83086L4.05971 3.5671L3.85923 4.54679ZM2.25947 5.26634C2.58229 4.7072 3.22669 4.41736 3.85923 4.54679L4.05971 3.5671C3.00548 3.35136 1.93148 3.83443 1.39344 4.76634L2.25947 5.26634ZM1.70099 6.23366L2.25947 5.26634L1.39344 4.76634L0.834961 5.73366L1.70099 6.23366ZM1.87772 7.97886C1.44935 7.49579 1.37816 6.79281 1.70099 6.23366L0.834961 5.73366C0.296923 6.66557 0.415573 7.83721 1.12952 8.64233L1.87772 7.97886ZM2.75061 8.96323L1.87772 7.97886L1.12952 8.64233L2.00241 9.6267L2.75061 8.96323ZM2.84144 10C2.84144 9.77867 2.85249 9.56008 2.87402 9.34472L1.87899 9.24521C1.85415 9.49358 1.84144 9.74538 1.84144 10H2.84144ZM2.87402 10.6553C2.85249 10.4399 2.84144 10.2213 2.84144 10H1.84144C1.84144 10.2546 1.85415 10.5064 1.87899 10.7548L2.87402 10.6553ZM1.87772 12.0211L2.75061 11.0368L2.00241 10.3733L1.12952 11.3577L1.87772 12.0211ZM1.70099 13.7663C1.37816 13.2072 1.44935 12.5042 1.87772 12.0211L1.12952 11.3577C0.415572 12.1628 0.296922 13.3344 0.83496 14.2663L1.70099 13.7663ZM2.25947 14.7337L1.70099 13.7663L0.83496 14.2663L1.39344 15.2337L2.25947 14.7337ZM3.85923 15.4532C3.22669 15.5826 2.58229 15.2928 2.25947 14.7337L1.39344 15.2337C1.93148 16.1656 3.00548 16.6486 4.05971 16.4329L3.85923 15.4532ZM5.14817 15.1894L3.85923 15.4532L4.05971 16.4329L5.34865 16.1691L5.14817 15.1894ZM6.67538 15.93C6.2741 15.7493 5.89433 15.5289 5.54109 15.2739L4.95574 16.0847C5.36313 16.3788 5.80137 16.6331 6.26475 16.8418L6.67538 15.93ZM7.35994 17.4743L6.94441 16.2278L5.99573 16.544L6.41125 17.7906L7.35994 17.4743ZM8.78296 18.5C8.13731 18.5 7.56411 18.0869 7.35994 17.4743L6.41125 17.7906C6.75154 18.8114 7.70688 19.5 8.78296 19.5V18.5ZM9.89992 18.5H8.78296V19.5H9.89992V18.5ZM11.3229 17.4743C11.1188 18.0869 10.5456 18.5 9.89992 18.5V19.5C10.976 19.5 11.9313 18.8114 12.2716 17.7906L11.3229 17.4743ZM11.7385 16.2278L11.3229 17.4743L12.2716 17.7906L12.6872 16.544L11.7385 16.2278ZM13.1418 15.2739C12.7885 15.5289 12.4088 15.7493 12.0075 15.93L12.4181 16.8418C12.8815 16.6331 13.3198 16.3788 13.7271 16.0847L13.1418 15.2739ZM14.8237 15.4532L13.5347 15.1894L13.3342 16.1691L14.6232 16.4329L14.8237 15.4532ZM16.4234 14.7337C16.1006 15.2928 15.4562 15.5826 14.8237 15.4532L14.6232 16.4329C15.6774 16.6486 16.7514 16.1656 17.2894 15.2337L16.4234 14.7337ZM16.9819 13.7663L16.4234 14.7337L17.2894 15.2337L17.8479 14.2663L16.9819 13.7663ZM16.8052 12.0211C17.2335 12.5042 17.3047 13.2072 16.9819 13.7663L17.8479 14.2663C18.386 13.3344 18.2673 12.1628 17.5534 11.3577L16.8052 12.0211ZM15.9323 11.0368L16.8052 12.0211L17.5534 11.3577L16.6805 10.3733L15.9323 11.0368ZM15.8414 10C15.8414 10.2213 15.8304 10.4399 15.8089 10.6553L16.8039 10.7548C16.8287 10.5064 16.8414 10.2546 16.8414 10H15.8414ZM15.8089 9.34472C15.8304 9.56008 15.8414 9.77867 15.8414 10H16.8414C16.8414 9.74538 16.8287 9.49358 16.8039 9.24521L15.8089 9.34472ZM16.8052 7.97886L15.9323 8.96323L16.6805 9.6267L17.5534 8.64233L16.8052 7.97886ZM16.9819 6.23366C17.3047 6.7928 17.2335 7.49579 16.8052 7.97886L17.5534 8.64233C18.2673 7.83721 18.386 6.66557 17.8479 5.73366L16.9819 6.23366ZM16.4234 5.26634L16.9819 6.23366L17.8479 5.73366L17.2894 4.76634L16.4234 5.26634ZM14.8237 4.54679C15.4562 4.41735 16.1006 4.7072 16.4234 5.26634L17.2894 4.76634C16.7514 3.83443 15.6774 3.35136 14.6232 3.5671L14.8237 4.54679ZM13.5347 4.81056L14.8237 4.54679L14.6232 3.5671L13.3342 3.83086L13.5347 4.81056ZM12.0075 4.07003C12.4088 4.25074 12.7886 4.47107 13.1418 4.7261L13.7271 3.91532C13.3198 3.6212 12.8815 3.3669 12.4181 3.15822L12.0075 4.07003ZM11.3229 2.52566L11.7385 3.77224L12.6872 3.45601L12.2716 2.20943L11.3229 2.52566ZM9.89992 1.5C10.5456 1.5 11.1188 1.91315 11.3229 2.52566L12.2716 2.20943C11.9313 1.18858 10.976 0.5 9.89992 0.5V1.5ZM8.78296 1.5H9.89992V0.5H8.78296V1.5Z'
                fill={props.color} />
            <path fillRule='evenodd' clipRule='evenodd'
                  d='M9.34143 11C9.89372 11 10.3414 10.5523 10.3414 10C10.3414 9.44772 9.89372 9 9.34143 9C8.78915 9 8.34143 9.44772 8.34143 10C8.34143 10.5523 8.78915 11 9.34143 11Z'
                  stroke={props.color} />
        </svg>

    );
};

export default SettingsIcon;