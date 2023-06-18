# React_work_timeline
If you are looking for a graduate program (GP) job in Australia, then you can take a look at this.

The application I am recommending this time is a lightweight tool that I developed myself. It is used for summarizing job information for Graduate Programs.

### Motivation
> There are many platforms nowadays that provide up-to-date and comprehensive job information, such as Seek, Indeed, GradAustralia, LinkedIn and so on. However, it always feels like there are too many jobs to go through and it can be overwhelming.
> 
> Although you can filter by "latest" to see the most recent job postings, you still don't have a clear idea of when to apply. Combining with Gantt chart, I came up with the idea of highlighting application deadlines and requirements (such as whether PR is required) on a timeline.

### Tech stack
> It's very simple - just pure TypeScript without any backend.
> 
> Data processing was a bit challenging especially dealing with HTML hierarchy and string manipulation.

### Functions
> 1. When opened, the date will be locked to the current date and all events with application dates after today will be filtered.
> 2. There are three filters available: one for filtering by date, one for filtering by company name, and one for filtering by industry.
> 3. Events can be switched by sliding or using the timeline at the bottom.

### interesting thing:
> 1. the filter is added by react component, so it might cause problem when you open it on the phone;
> 2. spent more than 3 hrs on the date filter, it seems ts had difficulties with multiple attributes filtering;
> 3. the frontend's pain is only the filter
> 4. the data preprocessing part is more painful, as i have to deal with multiple html structure. i scrape the md and html format of the web page, and utilised both to render the page you see here.

---
you can see a demo below:

[![Video Cover](http://img.youtube.com/vi/I7mnFkL-JGo/0.jpg)](https://youtu.be/I7mnFkL-JGo)
