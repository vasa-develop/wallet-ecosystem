'use client';
import React, { useMemo } from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import { addDays, format } from 'date-fns';
import 'react-calendar-heatmap/dist/styles.css';

export default function Heatmap({
  commitActivity,
}: {
  commitActivity: Array<{ total: number; week: number; days: number[] }>;
}) {
  const min = 0;
  const { days, max } = useMemo(() => {
    let max = 1;
    return {
      days: commitActivity.flatMap((record) =>
        record.days.map((d, i) => {
          max = max < d ? d : max;
          return {
            date: format(
              addDays(new Date(record.week * 1000), i),
              'yyyy-MM-dd'
            ),
            count: d,
          };
        })
      ),
      max,
    };
  }, commitActivity);
  let colorMultiplier = 1 / (max - min);

  return (
    <CalendarHeatmap
      showWeekdayLabels
      showOutOfRangeDays
      startDate={new Date((commitActivity[0].week - 24 * 3600) * 1000)}
      endDate={addDays(
        new Date(commitActivity[commitActivity.length - 1].week * 1000),
        6
      )}
      values={days}
      classForValue={(value) => {
        if (!value) {
          return 'color-empty';
        }
        return `bg-green heatmap-day-opacity-${parseInt(
          (colorMultiplier * value.count * 10).toString()
        )}`;
      }}
    />
  );
}
