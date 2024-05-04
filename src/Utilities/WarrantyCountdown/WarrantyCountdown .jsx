
import  Countdown  from 'react-countdown';

const WarrantyCountdown = ({ endDate }) => {
  // Convert endDate to a valid Date object
  const endDateObj = new Date(endDate);

  return (
    <div className='border p-2 mt-2 rounded-md'>
      <h2 className='font-semibold'>Warranty Countdown</h2>
      <Countdown date={endDateObj}>
        {({ days, hours, minutes, seconds, completed }) => {
          if (completed) {
            return <span className='text-yellow-300'>Expired</span>;
          } else {
            return (
              <span>
                {days} days {hours} hours {minutes} minutes {seconds} seconds
              </span>
            );
          }
        }}
      </Countdown>
    </div>
  );
};

export default WarrantyCountdown;

