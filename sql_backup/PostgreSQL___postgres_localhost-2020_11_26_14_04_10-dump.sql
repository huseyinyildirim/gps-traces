--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1
-- Dumped by pg_dump version 13.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS gps_tracking;
--
-- Name: gps_tracking; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE gps_tracking WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.UTF-8';


ALTER DATABASE gps_tracking OWNER TO postgres;

\connect gps_tracking

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tbl_admins; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_admins (
    id integer NOT NULL,
    name character varying NOT NULL,
    surname character varying NOT NULL,
    mail character varying NOT NULL,
    phone character varying NOT NULL,
    password character varying NOT NULL,
    created_at timestamp without time zone,
    created_by integer,
    updated_at timestamp without time zone,
    updated_by integer
);


ALTER TABLE public.tbl_admins OWNER TO postgres;

--
-- Name: tbl_admins_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tbl_admins_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_admins_id_seq OWNER TO postgres;

--
-- Name: tbl_admins_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tbl_admins_id_seq OWNED BY public.tbl_admins.id;


--
-- Name: tbl_customer_devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_customer_devices (
    customer_id integer NOT NULL,
    device_id integer NOT NULL
);


ALTER TABLE public.tbl_customer_devices OWNER TO postgres;

--
-- Name: tbl_customers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_customers (
    id integer NOT NULL,
    name character varying NOT NULL,
    surname character varying NOT NULL,
    mail character varying NOT NULL,
    phone character varying NOT NULL,
    password character varying NOT NULL,
    created_at timestamp without time zone,
    created_by integer,
    updated_at timestamp without time zone,
    updated_by integer
);


ALTER TABLE public.tbl_customers OWNER TO postgres;

--
-- Name: tbl_customers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tbl_customers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_customers_id_seq OWNER TO postgres;

--
-- Name: tbl_customers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tbl_customers_id_seq OWNED BY public.tbl_customers.id;


--
-- Name: tbl_device_traces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_device_traces (
    id integer NOT NULL,
    device_id integer NOT NULL,
    long character varying NOT NULL,
    lat character varying NOT NULL,
    created_at timestamp without time zone,
    ip_address character varying NOT NULL
);


ALTER TABLE public.tbl_device_traces OWNER TO postgres;

--
-- Name: tbl_device_traces_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tbl_device_traces_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_device_traces_id_seq OWNER TO postgres;

--
-- Name: tbl_device_traces_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tbl_device_traces_id_seq OWNED BY public.tbl_device_traces.id;


--
-- Name: tbl_devices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tbl_devices (
    id integer NOT NULL,
    serial_no character varying NOT NULL,
    secret_key character varying NOT NULL,
    created_at timestamp without time zone,
    created_by integer,
    updated_at timestamp without time zone,
    updated_by integer
);


ALTER TABLE public.tbl_devices OWNER TO postgres;

--
-- Name: tbl_devices_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tbl_devices_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tbl_devices_id_seq OWNER TO postgres;

--
-- Name: tbl_devices_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tbl_devices_id_seq OWNED BY public.tbl_devices.id;


--
-- Name: tbl_admins id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_admins ALTER COLUMN id SET DEFAULT nextval('public.tbl_admins_id_seq'::regclass);


--
-- Name: tbl_customers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_customers ALTER COLUMN id SET DEFAULT nextval('public.tbl_customers_id_seq'::regclass);


--
-- Name: tbl_device_traces id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_device_traces ALTER COLUMN id SET DEFAULT nextval('public.tbl_device_traces_id_seq'::regclass);


--
-- Name: tbl_devices id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_devices ALTER COLUMN id SET DEFAULT nextval('public.tbl_devices_id_seq'::regclass);


--
-- Data for Name: tbl_admins; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_admins (id, name, surname, mail, phone, password, created_at, created_by, updated_at, updated_by) FROM stdin;
\.


--
-- Data for Name: tbl_customer_devices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_customer_devices (customer_id, device_id) FROM stdin;
\.


--
-- Data for Name: tbl_customers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_customers (id, name, surname, mail, phone, password, created_at, created_by, updated_at, updated_by) FROM stdin;
\.


--
-- Data for Name: tbl_device_traces; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_device_traces (id, device_id, long, lat, created_at, ip_address) FROM stdin;
1	1	15	15	\N	192.168.1.1
2	1	16	16	\N	192.168.1.1
\.


--
-- Data for Name: tbl_devices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tbl_devices (id, serial_no, secret_key, created_at, created_by, updated_at, updated_by) FROM stdin;
1	1	x4Daj43	\N	\N	\N	\N
\.


--
-- Name: tbl_admins_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_admins_id_seq', 1, false);


--
-- Name: tbl_customers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_customers_id_seq', 1, false);


--
-- Name: tbl_device_traces_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_device_traces_id_seq', 2, true);


--
-- Name: tbl_devices_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tbl_devices_id_seq', 1, true);


--
-- Name: tbl_admins tbl_admins_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_admins
    ADD CONSTRAINT tbl_admins_pk PRIMARY KEY (id);


--
-- Name: tbl_customers tbl_customers_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_customers
    ADD CONSTRAINT tbl_customers_pk PRIMARY KEY (id);


--
-- Name: tbl_device_traces tbl_device_traces_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_device_traces
    ADD CONSTRAINT tbl_device_traces_pk PRIMARY KEY (id);


--
-- Name: tbl_devices tbl_devices_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tbl_devices
    ADD CONSTRAINT tbl_devices_pk PRIMARY KEY (id);


--
-- Name: tbl_admins_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX tbl_admins_id_uindex ON public.tbl_admins USING btree (id);


--
-- Name: tbl_customers_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX tbl_customers_id_uindex ON public.tbl_customers USING btree (id);


--
-- Name: tbl_device_traces_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX tbl_device_traces_id_uindex ON public.tbl_device_traces USING btree (id);


--
-- Name: tbl_devices_id_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX tbl_devices_id_uindex ON public.tbl_devices USING btree (id);


--
-- PostgreSQL database dump complete
--

