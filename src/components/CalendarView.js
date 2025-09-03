import React from 'react';
import './CalendarView.css';

const CalendarView = ({ cost, selectedBatch, handleBatchSelect }) => {
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  const batchDetails = {
    'Batch 1': { dates: [1, 2, 3, 4, 5], color: '#AFE1AF' },
    'Batch 2': { dates: [6, 7, 8, 9, 10], color: '#FAD5A5' },
    'Batch 3': { dates: [11, 12, 13, 14, 15], color: '#90EE90', fewSeats: true },
    'Batch 4': { dates: [16, 17, 18, 19, 20], color: '#dbf6a0' },
    'Batch 5': { dates: [21, 22, 23, 24, 25], color: '#dcffc1', fewSeats: true },
    'Batch 6': { dates: [26, 27, 28, 29, 30, 31], color: '#fbf9a0' }
  };
  
  return (
    <div className="calendar-view">
      <h2>Rs. {cost}</h2>
      <p>(Inclusive of Taxes)</p>
      <p>Group/Family of 5</p>

      <div className="calendar-grid">
        {calendarDays.map((day) => {
          const batch = Object.keys(batchDetails).find((batch) =>
            batchDetails[batch].dates.includes(day)
          );
          const batchInfo = batch ? batchDetails[batch] : null;

          return (
            <div 
              key={day} 
              className={`calendar-date ${selectedBatch === batch ? 'active' : ''}`} 
              style={{ backgroundColor: batchInfo ? batchInfo.color : '#f0f0f0', border: '1px solid #ccc', position: 'relative' }}
              onClick={() => batch && handleBatchSelect(batch)}
            >
              <strong>{day}</strong>
              {batchInfo?.fewSeats && <div className="few-seats-label" style={{ fontSize: '8px' }}>Few Seats</div>}
            </div>
          );
        })}
      </div>

      <div className="legend-section">
        {Object.keys(batchDetails).map((batch) => (
          <div key={batch} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: batchDetails[batch].color, border: '1px solid #ccc' }}></span>
            {batch} {batchDetails[batch].fewSeats && <span className="legend-badge">(Few Seats)</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
