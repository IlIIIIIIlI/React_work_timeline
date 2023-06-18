import React, { useState, useEffect } from "react";
import Timeline from "timelinejs-react";
import events from './data/events.json';
import { Checkbox } from 'antd';

const MyComponent: React.FC = () => {
    const today = new Date();
    const [dateRange, setDateRange] = useState<{ start: Date | null, end: Date | null }>({ start: today, end: today });
    const [searchKeyword, setSearchKeyword] = useState("");
    const [filteredEvents, setFilteredEvents] = useState(events);
    const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
    const [allGroups, setAllGroups] = useState<string[]>([]);
    const [key, setKey] = useState(Date.now());

    useEffect(() => {
        const groups = new Set(events.map(event => event.group));
        setAllGroups(Array.from(groups));
    }, []);

    const filterEvents = () => {
        const filtered = events.filter(event => {

            const eventStart = new Date(event.dates);

            if (dateRange.start && eventStart < dateRange.start) {
                return false;
            }
            console.log(eventStart);
            console.log(dateRange.start)

            if (searchKeyword && !event.text.headline.toLowerCase().includes(searchKeyword.toLowerCase())) return false;

            if (selectedGroups.length > 0 && !selectedGroups.includes(event.group)) return false;

            return true;
        });

        setFilteredEvents(filtered);
        setKey(Date.now()); // update the key
    };

    useEffect(() => {
        filterEvents();
    }, [dateRange, searchKeyword, selectedGroups]);

    const onGroupChange = (checkedValues: any) => {
        setSelectedGroups(checkedValues);
    };

    return (
        <div style={{ paddingTop: "0px", position: "relative" }}>
            <div style={{ position: "absolute", top: "50px", right: "20px", zIndex: 10, background: '#fff', padding: '10px', borderRadius: '5px' }}>
                <input type="date" onChange={e => {
                    if (e.target.value) {
                        const [year, month, day] = e.target.value.split('-').map(Number);
                        setDateRange({ ...dateRange, start: new Date(year, month - 1, day) });
                    } else {
                        setDateRange({ ...dateRange, start: null });
                    }
                }} />

                <button onClick={filterEvents}>Filter</button>
                <br />
                <input type="text" placeholder="Search..." onChange={e => setSearchKeyword(e.target.value)} />
                <br />
                <Checkbox.Group options={allGroups} onChange={onGroupChange} />
            </div>
            <Timeline
                key={key} // add key here
                target={<div className="timeline-test" style={{ height: 940 }} />}
                events={filteredEvents}
                options={{
                    timenav_position: "top",
                    hash_bookmark: true,
                    initial_zoom: 1,
                    scale_factor: 1,
                    debug: true,
                    default_bg_color: { r: 0, g: 0, b: 0 }
                }}
            />
        </div>
    );
};

export default MyComponent;
