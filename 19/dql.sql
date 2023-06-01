select 5*6 as eredmeny;

select country_name as "Ország" from countries;

select salary*370 from employees;


SELECT 
    first_name, 
    last_name, 
    salary, 
    salary * 1.05 AS new_salary
FROM
    employees;

SELECT 
    first_name, 
    last_name, 
    salary
FROM
    employees
ORDER BY first_name asc,salary DESC;

SELECT  phone_number
FROM employees
ORDER BY phone_number;

SELECT
	employee_id,
	first_name,
	last_name,
	salary
FROM
	employees
WHERE
	salary > 14000
ORDER BY
	salary DESC;

SELECT
	employee_id,
	first_name,
	last_name,
	department_id
FROM
	employees
WHERE
	department_id <> 11
ORDER BY
	first_name;

SELECT

    count(e.employee_id),
    e2.first_name,
    e2.last_name
FROM
	employees e join employees e2 on e.manager_id=e2.employee_id
GROUP BY
    e2.last_name
WHERE
	last_name = 'Chen';

SELECT
	employee_id,
	first_name,
	last_name,
	hire_date
FROM
	employees
WHERE
	hire_date BETWEEN '1999-01-01' and '2000-01-01'
ORDER BY
	hire_date DESC;

SELECT
	employee_id,
	first_name,
	last_name,
	hire_date
FROM
	employees
WHERE
	strftime('%Y',hire_date) = '1999'
ORDER BY
	hire_date DESC;

SELECT
	department_id,
	department_name
FROM
	departments
WHERE
	department_id IN (1, 2, 3);

SELECT 
    first_name,
    last_name,
    e.department_id,
    department_name
FROM
    employees e
        left JOIN
    departments d ON d.department_id = e.department_id
WHERE
    e.department_id IN (1 , 2, 3);

SELECT
	c.country_name,
	c.country_id,
	l.country_id,
	l.street_address,
	l.city
FROM
	locations l
full JOIN countries c ON l.country_id = c.country_id
WHERE
	c.country_id IN ('US', 'UK', 'CN')

SELECT
	employee_id,
	first_name,
	last_name
FROM
	employees
WHERE
	first_name NOT LIKE '%m';

SELECT
	department_name,
	COUNT(employee_id) headcount
FROM
	employees e
     JOIN
    departments d ON d.department_id = e.department_id
GROUP BY
	e.department_id
HAVING   
COUNT(employee_id)>5  
;

SELECT 
    department_name,
    MIN(salary) min_salary,
    MAX(salary) max_salary,
    ROUND(AVG(salary), 2) average_salary
FROM
    employees e
        INNER JOIN
    departments d ON d.department_id = e.department_id
GROUP BY 
    department_name
ORDER BY
    average_salary
;

SELECT 
    department_name,
    SUM(salary) total_salary
FROM
    employees e
        INNER JOIN
    departments d ON d.department_id = e.department_id
GROUP BY 
    department_name;

SELECT 
    department_name,
    job_title,
    COUNT(employee_id)
FROM
    employees e
        INNER JOIN
    departments d ON d.department_id = e.department_id
        INNER JOIN
    jobs j ON j.job_id = e.job_id
GROUP BY department_name , 
         job_title;


select c.country_name,r.region_name from countries c,regions r
    where 1=1
    --and c.region_id=1 
    and c.region_id=r.region_id;

select c.country_name,r.region_name 
    from countries c,regions r;

select *
    from countries c 
    join regions r on c.region_id=r.region_id
    join locations l on l.country_id=c.country_id
    --where c.country_id is null;

select j.job_title,count(*),sum(e.salary),avg(e.salary) from employees e
    join jobs j on e.job_id=j.job_id
    group by j.job_title
    ;

select * from employees e order by e.salary desc;


SELECT 2024 AS year, 
    CASE WHEN strftime('%d',2024 || '-02-29') IS NOT NULL 
    THEN 'leap' ELSE 'normal' END AS szokoev_e;    