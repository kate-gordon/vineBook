--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

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

SET default_with_oids = false;

--
-- Name: users; Type: TABLE; Schema: public; Owner: tkathryngordon
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying,
    last_name character varying,
    company character varying,
    email character varying,
    password character varying,
    role character varying
);


ALTER TABLE public.users OWNER TO tkathryngordon;

--
-- Name: buyer_id_seq; Type: SEQUENCE; Schema: public; Owner: tkathryngordon
--

CREATE SEQUENCE public.buyer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.buyer_id_seq OWNER TO tkathryngordon;

--
-- Name: buyer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tkathryngordon
--

ALTER SEQUENCE public.buyer_id_seq OWNED BY public.users.id;


--
-- Name: user_wine; Type: TABLE; Schema: public; Owner: tkathryngordon
--

CREATE TABLE public.user_wine (
    id integer NOT NULL,
    user_id integer,
    list_type character varying,
    wine_id integer
);


ALTER TABLE public.user_wine OWNER TO tkathryngordon;

--
-- Name: wine_list_id_seq; Type: SEQUENCE; Schema: public; Owner: tkathryngordon
--

CREATE SEQUENCE public.wine_list_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wine_list_id_seq OWNER TO tkathryngordon;

--
-- Name: wine_list_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tkathryngordon
--

ALTER SEQUENCE public.wine_list_id_seq OWNED BY public.user_wine.id;


--
-- Name: wines; Type: TABLE; Schema: public; Owner: tkathryngordon
--

CREATE TABLE public.wines (
    id integer NOT NULL,
    producer character varying,
    region character varying,
    country character varying,
    varietals character varying,
    year integer,
    type text
);


ALTER TABLE public.wines OWNER TO tkathryngordon;

--
-- Name: wines_id_seq; Type: SEQUENCE; Schema: public; Owner: tkathryngordon
--

CREATE SEQUENCE public.wines_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.wines_id_seq OWNER TO tkathryngordon;

--
-- Name: wines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: tkathryngordon
--

ALTER SEQUENCE public.wines_id_seq OWNED BY public.wines.id;


--
-- Name: user_wine id; Type: DEFAULT; Schema: public; Owner: tkathryngordon
--

ALTER TABLE ONLY public.user_wine ALTER COLUMN id SET DEFAULT nextval('public.wine_list_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: tkathryngordon
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.buyer_id_seq'::regclass);


--
-- Name: wines id; Type: DEFAULT; Schema: public; Owner: tkathryngordon
--

ALTER TABLE ONLY public.wines ALTER COLUMN id SET DEFAULT nextval('public.wines_id_seq'::regclass);


--
-- Data for Name: user_wine; Type: TABLE DATA; Schema: public; Owner: tkathryngordon
--

COPY public.user_wine (id, user_id, list_type, wine_id) FROM stdin;
47	4	Have	1
48	4	Have	9
49	4	Need	7
50	4	Need	11
51	2	Have	4
52	2	Have	10
53	2	Have	12
54	2	Need	3
55	2	Need	26
58	4	Need	3
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: tkathryngordon
--

COPY public.users (id, first_name, last_name, company, email, password, role) FROM stdin;
2	Carol	Marvel	Avenger	cptnmarv@aol.com	$2a$10$Zur47GSvN4JL6dzo/UbHf.Cqz103HxZBEGGdLlXNI6F0P/I22K3zm	buyer
1	Kate	Gordon	VB 	kategordon.code@gmail.com	$2a$10$r54Znw5.VwPMAOPzq/ZyCu0KRlXfcBZLVaYenDap.6PKZXxSwKHdu	rep
3	Olivia 	Ben	SVU	oliviab@aol.com	$2a$10$GwIU1aLjfghZmoFqG12HfO3cMwZGqpC6AJ6FHBOUwIdsxYTLOsJp2	buyer
4	Kate	G	V	kg	$2a$10$GnFZzL5SXCVbuVQvJ/EOnu9XiWEiZZ7moGwpvrnMKSd5SSFBukL5y	buyer
6	K	P	Rep2	rep	$2a$10$atJRdM89HDAsxeC8eMlaqecUi7q2qvrP0h0KGWy4S0s.N54l/aVrm	rep
\.


--
-- Data for Name: wines; Type: TABLE DATA; Schema: public; Owner: tkathryngordon
--

COPY public.wines (id, producer, region, country, varietals, year, type) FROM stdin;
1	Vina Robles	Paso Robles, CA	USA	Cabernet Sauvignon 	2016	Red
2	Iris Vineyards	Willamette Valley, OR	USA	Pinot Noir	2017	Red
3	Sonoma-Cutrer Vineyards	Sonoma Coast, CA 	USA	Chardonnay	2017	White
4	Hermann J. Wiemer Vineyard	Finger Lake, NY 	USA	Dry Riesling	2017	White
5	Dom Perignon	Champagne	France	Champagne	2009	Sparkling
6	Chateau Thivin	Beaujolais	France	Gamay	2018	Red
9	Vie Vite	Cotes de Provence	France	Gamay	2018	Rose
7	Domaine Bersan	Burgundy	France	Pinot Noir 	2016	Red
8	Chateau Montrose	Bordeaux	France 	Merlot, Cabernet Sauvignon	2006	Red 
10	Joseph Drouhin	Bourgogne	France	Chardonnay	2015	White
11	Domaine de la Pepiere	Muscadet, Loire	France	Melon de Bourgogne 	2017	White
13	Felsina	Chianti Classico	Italy	Sangiovese	2013	Red
12	Closel	Savennieres	France	Chenin Blanc	2015	White 
14	Azienda Agricola Rivetto	Piedmont	Italy	Nebiollo	2016	Red
15	Bolla	delle Venezie	Italy	Pinot Grigio	2016	White
16	Azienda Agricola Inama	Soave Classico	Italy 	Garganega 	2018	White
17	Bisci	Verdicchio di Matelica	Italy	Verdicchio 	2018	White
21	Vina Cabos	Mendoza	Argentina	Malbec	2016	Red
18	Altos de la Guardia	Rioja	Spain	Tempranillo	2018	Red
19	Torres	Catalonia	Spain	Merlot	2016	Red
20	La Cana	Rias Baixas	Spain	Albarino 	2017	White 
22	Vina Guerila	Vipava	Slovenia 	Zelen	2015	White
24	Reyneke Wines	Stellenbosch	South Africa	Chenin Blanc 	2017	White
23	Schloss Gobelsburg	Kamptal	Austria 	Gruner Veltliner	2018	White
25	Seresin Estate	Marlborough	New Zealand 	Pinot Gris	2016	Skin Contact
26	Giesen	Marlborough	New Zealand	Sauvignon Blanc	2014	White
\.


--
-- Name: buyer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tkathryngordon
--

SELECT pg_catalog.setval('public.buyer_id_seq', 6, true);


--
-- Name: wine_list_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tkathryngordon
--

SELECT pg_catalog.setval('public.wine_list_id_seq', 59, true);


--
-- Name: wines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: tkathryngordon
--

SELECT pg_catalog.setval('public.wines_id_seq', 26, true);


--
-- Name: users buyer_pkey; Type: CONSTRAINT; Schema: public; Owner: tkathryngordon
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT buyer_pkey PRIMARY KEY (id);


--
-- Name: user_wine user_wine_user_id_wine_id_key; Type: CONSTRAINT; Schema: public; Owner: tkathryngordon
--

ALTER TABLE ONLY public.user_wine
    ADD CONSTRAINT user_wine_user_id_wine_id_key UNIQUE (user_id, wine_id);


--
-- Name: user_wine wine_list_pkey; Type: CONSTRAINT; Schema: public; Owner: tkathryngordon
--

ALTER TABLE ONLY public.user_wine
    ADD CONSTRAINT wine_list_pkey PRIMARY KEY (id);


--
-- Name: wines wines_pkey; Type: CONSTRAINT; Schema: public; Owner: tkathryngordon
--

ALTER TABLE ONLY public.wines
    ADD CONSTRAINT wines_pkey PRIMARY KEY (id);


--
-- Name: user_wine userId; Type: FK CONSTRAINT; Schema: public; Owner: tkathryngordon
--

ALTER TABLE ONLY public.user_wine
    ADD CONSTRAINT "userId" FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: user_wine user_wine_wine_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: tkathryngordon
--

ALTER TABLE ONLY public.user_wine
    ADD CONSTRAINT user_wine_wine_id_fkey FOREIGN KEY (wine_id) REFERENCES public.wines(id);


--
-- PostgreSQL database dump complete
--

