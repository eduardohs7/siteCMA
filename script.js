/**
 * ============================================================================
 * CENTRO DE MEMÓRIA DA AMAZÔNIA - UFPA
 * Script de Navegação em Miller Columns (Acervo e Galeria)
 * ============================================================================
 */

// 1. ESTRUTURA DE DADOS DO ACERVO PRINCIPAL
const acervoData = {
    "Fundo do Tribunal de Justiça do Pará": {
        description: "Documentação originária do atual Tribunal de Justiça do Estado do Pará, do final do século XVIII até o ano de 1970, salvaguardada pelo Centro de Memória da Amazônia (CMA) desde o ano de 2007. Consistem em sua maioria de documentos cíveis e criminais, divididos em diferentes procedências. Com o avanço do trabalho dos bolsistas do CMA, os instrumentos de pesquisa desse acervo são periodicamente atualizados.",
        items: {
            "Série Cível": {
                "Catálogos": {
                    "Catálogo de Inventários": {
                        "1ª, 4ª e 6ª Varas": "https://ufpabr.sharepoint.com/:b:/g/IQB-5eKQdf_CQpXaX8YiDrhEAXjcbW-N6_-SK1s_WqCiTqI?e=qNYFLW",
                        "5ª, 7ª, 8ª e 11ª Varas": "https://ufpabr.sharepoint.com/:b:/g/IQAk5CGvxETAS4wOGlc29LZMAVkGzHAH6Mzndtdi0z55-J8?e=iwVz4p",
                        "2ª Vara": "https://ufpabr.sharepoint.com/:b:/g/IQDV8rr-6GggS5VfWhM59FP_AVxbRnPp7L29UezuHlbfgHM?e=ZpkRil",
                        "14ª Vara": "https://ufpabr.sharepoint.com/:b:/g/IQCsgE6D6EHgQ5Hv29xcSQZHAfLlKpDpVNT-Epv6PRDJs1o?e=dxIX3y"
                    },
                    "Catálogo de Casamentos": {
                        "Casamentos - Varas Cíveis Vol. I": "https://ufpabr.sharepoint.com/:b:/g/IQA9F0FAjt0uT5BjO4XUK8BPAQF9t6Si4w7k9JITZkwR-zI?e=JjSbtW",
                        "Casamentos - Varas Cíveis Vol. II": "https://ufpabr.sharepoint.com/:b:/g/IQDjqsPpzrfnR6FpEYjokAp-ARKt2hgIa5kKZ38s1UJj8TM?e=njLwnE"
                    },
                    "Catálogo dos Distritos Cíveis": "https://ufpabr.sharepoint.com/:b:/g/IQBKNe6c9efnRJjaAQsEqhntARF02SkTb36oYMWbPf87CIE?e=2bzDyo",
                    "Catálogo das Comarcas dos Interiores - Cível": "https://ufpabr.sharepoint.com/:b:/g/IQD5IDugSiEpQpYtzfEHzvbcAefUGY3g-pAAQ5QIQF5XMFQ",
                    "Catálogos da Assistência Judiciária": {
                        "Volume I": "https://ufpabr.sharepoint.com/:b:/g/IQB6zjMV3ZPGSr5ULdrg9NaxAfohW4IYritlvMiXp8WjotM",
                        "Volume II": "https://ufpabr.sharepoint.com/:b:/g/IQCSXfslQpoZQ4M8tdI2FiVyAdZ8_RQQmHOJe9J5CvHwTvI"
                    }
                },
                "Guias das Procedências": {
                    "Guia dos Cartórios Judiciais/ Varas Cíveis": {
                        "1ª Vara Cível-Cartório Santiago": "https://ufpabr.sharepoint.com/:b:/g/IQC6By2bev7WQ5XPa0cDHeNoAfVpFNJEEBKtcVM5DLxSekY?e=cIeUNf",
                        "2ª Vara Cível-Cartório Odon": "https://ufpabr.sharepoint.com/:b:/g/IQC97R6LHp_ERYtblI11R_DMAU0uPYwVZx20UshmdedvYl8?e=tV0L0Y",
                        "3ª Vara Cível-Cartório Sampaio": "https://ufpabr.sharepoint.com/:b:/g/IQBNXeTCPOUSQKEClh48GLQ6AfW8B8MLrfaKKbN413FZVAc?e=f5Bj92",
                        "4ª Vara Cível-Cartório Leão": "https://ufpabr.sharepoint.com/:b:/g/IQBxm68VKbcBQLT9NBP_JEOiAQl6UIX1anJDEM3_HvjDjDw?e=RktalF",
                        "5ª Vara Cível-Cartório Pepes": "https://ufpabr.sharepoint.com/:b:/g/IQCykgU9rByZTpO0HaLefX--Abbo7wn_wjc_RZelYR9Ekno?e=URPd3v",
                        "6ª Vara Cível-Cartório Barata": "https://ufpabr.sharepoint.com/:b:/g/IQDdHSggWcueQ5PNsGJB88rMAeQQwKM8PFQrpHEijlnbtf8?e=5KbDpC",
                        "7ª Vara Cível-Cartório Trindade": "https://ufpabr.sharepoint.com/:b:/g/IQBq4ecl8oq9Tqxav1kbFn9aAVsNpKe8OPu7tBana619qC4?e=zZvyOT",
                        "8ª Vara Cível-Cartório Ana Lobato": "https://ufpabr.sharepoint.com/:b:/g/IQC1pGA_iW09QqtyfBLuvkEKAVtqvbeP6hMJgGSEcwlth0o?e=99BZAM",
                        "10ª Vara Cível-Cartório Sarmanho": "https://ufpabr.sharepoint.com/:b:/g/IQCOS7v0pB3YTqeHMlDqin44AfFsh-p24N4ofaYvFkch1uM?e=r6rkre",
                        "11ª Vara Cível-Cartório Fabiliano Lobato": "https://ufpabr.sharepoint.com/:b:/g/IQC7ooOGI9dLSbKSUqewTC3wAbDPDpSjbu7yCxbhmEUC3l4?e=noPgYZ",
                        "14ª Vara Cível-Cartório Sarmento": "https://ufpabr.sharepoint.com/:b:/g/IQC3Xu_AQNfgT4jzl_94QC_bAXnX20oR98ctN41Wl5zRchg?e=Vcasql"
                    },
                    "Guia da Assistência Judiciária": "https://ufpabr.sharepoint.com/:b:/g/IQBc8nDsV5cjTaGTBQH9I6QVAW0NRMKBtkyLapoNt7_MPRA?e=wiiZ0f"
                }
            },
            "Série Crime": {
                "Guias das Procedências": {
                    "1º Distrito Criminal": "https://ufpabr.sharepoint.com/:b:/g/IQAmsuze4GSNR5L2dZmd9tgZAVG1BmLxa5U2RkceAzT4Ovg?e=mlqc2l",
                    "2º Distrito Criminal": "https://ufpabr.sharepoint.com/:b:/g/IQBT12K8smwiSYVi5iwdWyotAbwCTPCRjlD-QoyYhl8954w?e=Qd6kWL",
                    "3º Distrito Criminal": "https://ufpabr.sharepoint.com/:b:/g/IQCx5SUiyBw6So_aPHOfjMPiAS5Vzo67qsCiqqCOErpwsoA?e=E9T0o7",
                    "1ª Vara Penal": "https://ufpabr.sharepoint.com/:b:/g/IQCcds-ZpyDCTLT1knl4Ko8vASf6lB_4TYmPAbFNY-sB_-U?e=S85y7W",
                    "2ª Vara Penal": "https://ufpabr.sharepoint.com/:b:/g/IQDnXjdPT_wZR6NLNy9qVC0TASK3qzGLtbXd3zut5s4oka0?e=43k5cb",
                    "3ª Vara Penal": "https://ufpabr.sharepoint.com/:b:/g/IQDGCZGlkL70TZo7KZ3NzPHyAfZaJoh-TzoMblTx3LihQ3U?e=Gf7BhF",
                    "5ª Vara Penal": "https://ufpabr.sharepoint.com/:b:/g/IQC9pFBavFwMR5Pqzx3zpDrMAUuYG45XECA_BsjJ4YwIejg?e=nLDvyEcs/crime/5_vara_penal.pdf",
                    "6ª Vara Penal": "https://ufpabr.sharepoint.com/:b:/g/IQD_pDYdOh4PT60H7WTNAXlMAQtb_9GzkeclezWlvdzsIS4",
                    "8ª Vara Penal": "https://ufpabr.sharepoint.com/:b:/g/IQAWPiSopjpuQoNFfHp5jSgkAdFkn2dvIi0QQvKP53H8nKE?e=88q3FE", 
                    "9ª Vara Penal": "https://ufpabr.sharepoint.com/:b:/g/IQCWIMNzo51gQKSHrVT4dZHSAUO7cXyReIAEwkV5vG-aKsE?e=LEGa4b",
                    "10ª Vara Penal": "https://ufpabr.sharepoint.com/:b:/g/IQAMy76AuhlgRomUuxM-NxyXAZBeynFpEfse5-hDUyhLrmo?e=qDniCe",
                    "1ª Pretoria": "https://ufpabr.sharepoint.com/:b:/g/IQAfjXBO2UYfSL4YX-Yjd71CAaSPwIHzHVMmS7z4Yk1wSKw?e=NYR2Sn",
                    "2ª Pretoria": "https://ufpabr.sharepoint.com/:b:/g/IQAvRY8a1P5zRZM6-sYqWfICAXaJa_3lIkchyN-bHq4ktmg?e=4mFagD",
                    "3ª Pretoria": "https://ufpabr.sharepoint.com/:b:/g/IQAQGvGvc278Q48BWvWmWLV1AX6xXpkhp35OSGSmgdUvM-I?e=fK7wqy    ",
                    "4ª Pretoria": "https://ufpabr.sharepoint.com/:b:/g/IQCGqHgqj5RbQLrgcH2yxWaLAZ09axU2OxDuHFZTHnwtYG4?e=p5yHTI"
                },
                "Catálogo das Comarcas dos Interiores - Criminal": "https://ufpabr.sharepoint.com/:b:/g/IQCRsEnwG1CQQb_HgDU_kcH0ASiZPNryqbsO58a7bvC_9kM?e=Pmc4Uo",
                "Catálogo da Subsérie Diversos": {
                    "Diversos - Distritos Criminais": "https://ufpabr.sharepoint.com/:f:/g/IgC3YBHCeIVzSa5xc1yM3-1GAQUMueepkhErkhzYzVE7yrs?e=ROW449"
                },
                "Documentos Digitalizados": {
                    "Processos-Crime pré-1870": "https://ufpabr.sharepoint.com/:f:/g/IgAYqLvkfLw5QqZOILqPQdNDAa5r7tAnLUFtI0qzGnvtxfw?e=xhyuri",
                    "Processo Severa Romana": {
                        "Severa Romana": "https://ufpabr.sharepoint.com/:b:/g/IQDGSrIHTQG0SaJ9mMeWz8A1AWN_Qi6ncQuTQaA-F8lLsFw?e=YN65Dt",
                        "Severa Romana Transcrito": "https://ufpabr.sharepoint.com/:b:/g/IQAGMDSOdx2fQ4qFCcZwxigsAbXVGTU479_u1Vj4Fnkc_rA?e=9FTPle"
                    },
                    "1ª Vara Penal": "https://ufpabr.sharepoint.com/:b:/g/IQCrSqlxCCWDQ7TZzjE5OkIRAajWH8CZLCFKHwRy2mCHuRw?e=SNU8ZV"
                }
            },
            "Série Justiça Militar": {
                "Catálogos da Justiça Militar": "https://ufpabr.sharepoint.com/:b:/g/IQDMgmxcMDpIRbpESZSCDvMOAYdyxTFqRs78GTLXl-p6Z4M?e=6Gl41I",
                "Caixas Digitalizadas": "https://ufpabr.sharepoint.com/:f:/g/IgCXBSyX4XM6RpC_Io7AaiJXAbCXyCBb6Wf1oNwsPnMKUhs?e=AXz4ib"
            }
        }
    },
    "Hemeroteca": {
        description: "Conjunto de jornais de origens variadas, atualmente, em sua maioria alocados para a seção de Obras Raras do Centro de Memória da Amazônia.",
        items: {
            "Acesse a Hemeroteca": "https://ufpabr.sharepoint.com/:b:/g/IQBdIR9lC-12Q640Q6QdyZbeAYrYZEXzg_ljhQFlM9VW5U4?e=AULzBh"
        }
    },
    "Biblioteca e Coleções Pessoais": {
        description: "Constituídas a partir de doações de acervos bibliográficos por instituições e pesquisadores, a Biblioteca do Centro de Memória da Amazônia guarda um número considerável de coleções de livros.",
        items: {
            "Acesse a Biblioteca": "biblioteca.html"
        }
    },
    "Projetos": {
        description: "Consistem em diversas parcerias realizadas entre o Centro de Memória da Amazônia e diferentes instituições, a partir do ano de 2019, para o trabalho com a documentação de seu acervo. Seus resultados foram a produção de catálogos e, na maior parte deles, cópias digitais dos documentos selecionados, garantindo seu maior acesso por parte de pesquisadores e interessados.",
        items: {
            "Memórias de Além-Mar": {
                description: "Nesta seção se encontram os produtos do Projeto Memórias de Além-Mar idealizado e produzido pelo Centro de Memória da Amazônia da UFPA em Parceria com a Secretaria General Iberoamericana e apoio do Ministério de Assuntos Exteriores e de Cooperação (Espanha). Tratam-se de documentos digitalizados referentes a processos de Casamentos (1891 - 1970) e Inventários (1785 - 1970) de portugueses e espanhóis migrados à Belém/PA e localizados em Cartórios Civéis nas Varas 1ª, 2ª, 4ª, 5ª, 6ª, 7ª, 8ª, 11ª e 14ª.",
                items: {
                    "Catálogos": {
                        description: "Estes catálogos, divididos por procedência e volumes, contêm os documentos de inventários de portugueses e espanhóis, catalogados e digitalizados do século XIX ao XX, referente ao Projeto Memórias de Além-Mar. Este catálogo permite fazer busca pelos nomes dos sujeitos existentes nos processos.",
                        items: {
                            "Catálogos - Inventários Varas Cíveis": "https://ufpabr.sharepoint.com/:b:/g/IQA8xxrhI_ERTowv9RfmXIwuAVeW4lPrz_pwrY7iNHHnkcQ?e=GcPLoc"
                        }
                    },
                    "Genealogia": {
                        description: "Acesse aqui as árvores genealógicas produzidas a partir das famílias de portugueses e espanhóis identificadas nos casamentos e inventários do projeto, organizada em catálogos.",
                        items: {
                            "Árvores Genealógicas": "https://ufpabr.sharepoint.com/:f:/g/IgD-owlZnhpyTrKuf2tybQQIATXg4GrztMiy4Hdw3J3pcGY?e=sAhnCl"
                        }
                    }
                }
            },
            "Processos Criminais - Biblioteca Britânica": {
                description: "O projeto Processos Crimes - Biblioteca Britânica objetiva debater a temática criminal visando a salvaguarda da Coleção de Processos e Livros Cartoriais do Tribunal de Justiça do Pará - Brasil (1818-1970) atualmente abrigada no CMA. Neste projeto, objetiva-se guardar e divulgar parte deste acervo composto por mais de 7.000 documentos entre livros de notas e processos-crimes que recuperam a história da ocupação do território Amazônico. São úteis a pesquisadores acadêmicos interessados na história dos povos amazônicos. Mas ainda servem ao fomento à cidadania. Há documentos como crimes de \"defloramento\" ou estupros, outros de roubos e assassinatos que envolvem muitos dos povos mais vulneráveis do passado.",
                items: {
                    "Acidente de trabalho": "https://ufpabr.sharepoint.com/:b:/g/IQBz7b6oNHzuS799Xi449xgZAb1sAfRlm5PHj5nfuWcYaYU?e=EihKXY",
                    "Afogamento": "https://ufpabr.sharepoint.com/:b:/g/IQCFZOZsKse3QYX2uXXJCajrAc9Zyj5hjN8GcDLhQqEK71Y?e=jElHAB",
                    "Agressão": "https://ufpabr.sharepoint.com/:b:/g/IQDhd410DK0nQYDepQcCKwbEAUz8UIBU6QVSfvrioNnfRfk?e=g7z2oS",
                    "Alistamento eleitoral": "https://ufpabr.sharepoint.com/:b:/g/IQCGHmI22cvFTJw3KfeiP0QMAW-ipraEMD1c0EIMyvE8two?e=rC2uwf",
                    "Ameaça": "https://ufpabr.sharepoint.com/:b:/g/IQBPNhm-uR3pQYQqmMuV8Cj6AQM-pc_rWk3cF-JXmmU7fdo?e=NOIREM",
                    "Apropriação indébita": "https://ufpabr.sharepoint.com/:b:/g/IQB2Gu0gZwYIR6QelTcCq5DIAVYOqBP634o00Lc8FQ8-120?e=P2oXCY",
                    "Apuração de morte": "https://ufpabr.sharepoint.com/:b:/g/IQC4dU2g3lguTrmb6vIwcuEUAY1HF6ELr-lzHE12xXQeY58?e=iOmIZ5",
                    "Arma proibida": "https://ufpabr.sharepoint.com/:b:/g/IQByPVUukJsGQLXgjmx7iIVhAbLnR9G7VvVcQ0n6DonkYNk?e=bsC1Ww",
                    "Arquivamento": "https://ufpabr.sharepoint.com/:b:/g/IQAPVT6aYzi7Qamqyn152D6cAf3gauqH38q-jIeMXt_pmKE?e=wSmxVu",
                    "Atentado ao pudor": "https://ufpabr.sharepoint.com/:b:/g/IQBQIr8kTT61QIiS57I2_mZ-ASZsBTGtddwejD9Cjw6gKZo?e=kRGSwP",
                    "Atentado violento ao pudor": "https://ufpabr.sharepoint.com/:b:/g/IQA87ixItLGQSKSfuSSUTtR9Af60DVXgNJK0ZphfKYQjdT8?e=isGmaM",
                    "Bigamia": "https://ufpabr.sharepoint.com/:b:/g/IQAUKtY1Db_LQrVffIxWD2fdAXxoPFqgQsCyeLbRltWGc5k?e=231o2U",
                    "Busca e apreensão": "https://ufpabr.sharepoint.com/:b:/g/IQC7Wi6CPjH8QZIZdZndlA9qAU_2PlBn3LvgXjDRJx3vsY8?e=Yc2YzV",
                    "Calúnia": "https://ufpabr.sharepoint.com/:b:/g/IQAkgR9EjL0oTZVcF_RByYVPAbK7JdAqQ8Zyg5y3Sx3PakY?e=0K776r",
                    "Carta precatória": "https://ufpabr.sharepoint.com/:b:/g/IQC1TXii-RZIQ6_pVx_KOwqZAaXfJKrAtWh-WTcw9nPc7Q0?e=6hroSs ",
                    "Casa de prostituição": "https://ufpabr.sharepoint.com/:b:/g/IQBtU9yQLrgORrtSUCi7hnI0AaiWbrtJLehmoq65d5lCcLo?e=ukU9Q8",
                    "Castigos corporais imoderados": "https://ufpabr.sharepoint.com/:b:/g/IQAlUygGpjjqTYQBoqhbrQgAAQbqTEt1CkeeIMmgjjOuY30?e=C5RLxh",
                    "Comutação de pena": "https://ufpabr.sharepoint.com/:b:/g/IQDJsX1ubY2vT59JDEma-LksATuAesAKikDHGVBksrfmaaI?e=b9kfZ8",
                    "Contrabando": "https://ufpabr.sharepoint.com/:b:/g/IQAy39zxcc16SYTIJLbrCXwVAbjqxxkDyFIIQqhLe-Gt68U?e=WzEQ9E",
                    "Corrupção de menores": "https://ufpabr.sharepoint.com/:b:/r/Documentos%20Compartilhados/Projeto%20Biblioteca%20Brit%C3%A2nica%20-%20Planilhas/Cat%C3%A1logos%20para%20o%20site/Corrup%C3%A7%C3%A3o%20de%20Menores/Cat%C3%A1logo%20Corrup%C3%A7%C3%A3o%20de%20Menores.pdf?d=wa4ca95f949d047b4ad776e138d9ecd02&csf=1&web=1&e=CIGlqD",
                    "Corrupção e corrupção ativa e passiva": "https://ufpabr.sharepoint.com/:b:/g/IQDH-7DoX4_xQby97IMHLki9AU6XggKMLP9bjarYubXKvAQ?e=XS3OP1",
                    "Dano": "https://ufpabr.sharepoint.com/:b:/g/IQBvh2V0ky77Q7ik7BdKYjbxAdZOo5u2jT693cIr8E1J8DI?e=jzeNYL",
                    "Defloramento": "https://ufpabr.sharepoint.com/:b:/r/Documentos%20Compartilhados/Projeto%20Biblioteca%20Brit%C3%A2nica%20-%20Planilhas/Cat%C3%A1logos%20para%20o%20site/Defloramento/Cat%C3%A1logos%20finais/Cat%C3%A1logo%20Defloramento.pdf?d=wccdddcb647834d00bfbca9ae4ee43cf7&csf=1&web=1&e=Pic0i8",
                    "Delito eleitoral": "https://ufpabr.sharepoint.com/:b:/g/IQBNUQoglHOMRYt9eJX9RNEsAUxTT9sl0bkRFCsgs5mXvU8?e=glsloh",
                    "Desacato": "https://ufpabr.sharepoint.com/:b:/r/Documentos%20Compartilhados/Projeto%20Biblioteca%20Brit%C3%A2nica%20-%20Planilhas/Cat%C3%A1logos%20para%20o%20site/Desacato/Cat%C3%A1logo%20Desacato.pdf?d=w17465b052b7c4aaa91c7b8ae77a86362&csf=1&web=1&e=pUfJai",
                    "Difamação": "https://ufpabr.sharepoint.com/:b:/g/IQBblPJVIoksT68HHRnAoLCyAc9Xon0NUSSusMUvVV_S-KU?e=gbYjso",
                    "Difamação e calúnia impressa": "https://ufpabr.sharepoint.com/:b:/g/IQBABLTXOh79QoB3FHWz9zWeAZ7VLN5uCDr2IQ_XQO5-yzc?e=pblqLC",
                    "Direção perigosa de veículo": "https://ufpabr.sharepoint.com/:b:/g/IQBQXUUVXL5FTLBgC_mmZghKAVoDLrh0GnOP0aWRno9c5EE?e=b1I5yz",
                    "Disparo de arma de fogo": "https://ufpabr.sharepoint.com/:b:/g/IQB0RzjiFN6ET6CxUMn_fSJ1AVtmL6kyM5fEQirWLaHuzQw?e=Q9jDeE",
                    "Economia popular": "https://ufpabr.sharepoint.com/:b:/g/IQCPO2L8xBSUQK9vmqGTYaP0AVjQaNhYTnEhP6FV8gzgLpU?e=eowmX5",
                    "Embriaguez": "https://ufpabr.sharepoint.com/:b:/r/Documentos%20Compartilhados/Projeto%20Biblioteca%20Brit%C3%A2nica%20-%20Planilhas/Cat%C3%A1logos%20para%20o%20site/Disparo%20de%20arma%20de%20fogo/Cat%C3%A1logo%20Disparo%20de%20arma%20de%20fogo.pdf?d=we2384774de144f84a0b150c9ff7d2275&csf=1&web=1&e=V5PyyH",
                    "Entorpecentes": "https://ufpabr.sharepoint.com/:b:/g/IQD3-U30bnA_TZ76R_zxG4e5ASQdr4TO9_11DCkB4-YSFpI?e=BY45KI",
                    "Estelionato": "https://ufpabr.sharepoint.com/:b:/g/IQDwyVK8aIoxQLLsrgpx9wcnAV-csxL5T55GePFXx6jCVkM?e=kZQKLJ",
                    "Espancamento": "https://ufpabr.sharepoint.com/:b:/g/IQAnLJeezccsQrD0rdBsaV0EAWx6y-q9Z9UW4gtuPY269_4?e=Oz2Jsi",
                    "Flagrante e comunicação de prisão": "https://ufpabr.sharepoint.com/:b:/g/IQDv1vPibm12RIYngLPxl1dkAdtTmSHYktCNTnvffDWqPq8?e=jWpi9H",
                    "Queixa crime - difamação, calúnia e injúrias": "https://ufpabr.sharepoint.com/:b:/g/IQDOHSvY4IVVTrZaqsDijOctAeerOTBtOFp6vSMX_ydkYHo?e=AQu1KV",
                    "Queixa crime - difamação": "https://ufpabr.sharepoint.com/:b:/g/IQBp_aJCWY8RT7ZsC-pPLm3cAXnYEaXxcsCr4pfk8Y2lR6s?e=6SWdgL"
                }
            },
            "Processos Cíveis - CNPq: Estatutos e Associativismo": {
                description: "O projeto Processos Cíveis - CNPq objetiva discutir a temática do cooperativismo e associativismo na Amazônia Brasileira a partir do acervo de processos cíveis do CMA. Somando esforços em rede para divulgar (acadêmica e socialmente) as formas associativistas, recreativas, mutualistas e de irmandades religiosas capazes de conectar os espaços e gentes amazônicas do passado com os do presente; fornecendo conexões entre a história, a linguagem e as identidades associativas locais, com as nacionais e as internacionais entre 1835-1988.",
                items: {
                    "Associações culturais": "https://ufpabr.sharepoint.com/:f:/g/IgBWtsiANw9pSKr27MYPM7jdAS2kqPHxWStXfI1-s0Vex4M?e=UfWH0x",
                    "Associações mutualistas": "https://ufpabr.sharepoint.com/:f:/g/IgDaXIWkRnPAQoutrctPYZ1MAQtw2VhcgyjAw1d4ska-x7c?e=xPwhwS",
                    "Associações de instrução pública": "https://ufpabr.sharepoint.com/:f:/g/IgAYSUJEgNNOQJflpqyptJkGAV4gM9ZPYl2gdZI6bgnuZUI?e=9uh1OD"
                }
            },
            "Centro Acadêmico de História": {
                description: "O projeto \"Entre as Memórias da História: Arquivo do Centro Acadêmico de História, campus Guamá (1974-2019)\" visa salvaguardar a documentação do CAHIS que estava dentro do acervo inativo do CMA, procurando disponibilizá-la para os pesquisadores. Através dessa iniciativa, pretende-se preservar e manter viva as memórias de inúmeros discentes e docentes da Faculdade de História e membros do CAHIS que participaram ativamente da construção da luta por direitos estudantis e sociais dentro da Universidade Federal do Pará. Dessa forma, os documentos presentes no acervo podem ser úteis à pesquisa histórica, evidenciando momentos como a luta pela meia-passagem e/ou o movimento ForaCollor. Além disso, torna possível a discussão e a pesquisa sobre a própria história da Faculdade.",
                items: {
                    "Acessar Documentação do CAHIS": "https://ufpabr.sharepoint.com/:b:/g/IQDuTD_zYQPrSrkaFE22hAdAAaGttt_k8rmt-VcgqGK50SE?e=XQQ2wW"
                }
            },
            "Tratamento Arquivístico - Registros Civis de Casamentos (1888-1908)": {
                description: "O Projeto de extensão “Tratamento arquivístico do Acervo do Centro de Memória da Amazônia” foi aprovado pelo edital PIBEX/PROEX 2024 e pela congregação do Instituto de Ciências Sociais Aplicadas (ICSA/UFPA) por meio da Portaria 061/2024. O projeto foi executado pela Faculdade de Arquivologia da Universidade Federal do Pará como parte do componente curricular de extensão obrigatória. Por meio desta iniciativa realizou-se a leitura e transcrição paleográficas de registros civis de casamento elaborados entre os anos de 1888 e 1908, visando recuperar e preservar o teor informacional dessa documentação. Os catálogos resultantes das atividades do projeto, aqui disponibilizados, constituem fontes úteis ao exercício da cidadania e a preservação da memória e da história regional, especialmente em relação ao contexto da Belle Époque amazônica. As informações dos catálogos podem ser complementadas por meio de consulta interna às planilhas elaboradas pela equipe do Projeto, nos quais, além dos dados presentes nos catálogos, constam idade, estado civil, profissão, além de observações sobre retificações posteriores etc. Como o projeto ainda está em andamento, atualizações serão efetuadas periodicamente.",
                items: {
                    "Acessar Registros Civis de Casamentos": "https://ufpabr.sharepoint.com/:b:/g/IQBMBxBU_u-4TZ4o_q97Uqo6AeLbZOsQNhxmrmAyYkIH_Sg?e=hdVSqw"
                }
            }
        }
    },
    "Acervo do Grupo de Mulheres Prostitutas do Estado do Pará": {
        description: "A documentação da associação do Grupo de Mulheres Prostitutas do Estado do Pará encontra-se salvaguardada pelo Centro de Memória da Amazônia, desde o ano de 2022, quando foi organizada e adequada em um projeto coordenado pelos professores Adriana Coimbra e José do Espírito Santo Júnior e disponibilizada para consulta.",
        items: {
            "Acesse o Acervo": "https://ufpabr.sharepoint.com/:b:/g/IQCsav4uQac4TL9si0zYhR8FAQL4kzL8WNGBDzfz1vH-S3A?e=fN1Dzx"
        }
    }
};

// 2. ESTRUTURA DE DADOS DA GALERIA
const galeriaData = {
    description: "Coleção de registros fotográficos e visuais salvaguardados pelo Centro de Memória da Amazônia, retratando paisagens, contextos e memórias históricas da região.",
    items: {
        "Panorama do Pará em Doze Vistas - J.L Righini": "https://ufpabr.sharepoint.com/SEU_LINK_RIGHINI",
        "Fotografias do Acervo Clóvis Moraes Rego": "https://ufpabr.sharepoint.com/SEU_LINK_CLOVIS_REGO"
    }
};

// 3. TÍTULOS DAS COLUNAS (NÍVEIS)
const headerNames = [
    "Fundo / Entidade",
    "Série / Módulo",
    "Categoria / Seção",
    "Subcategoria",
    "Item / Documento",
    "Arquivo"
];

// 4. INICIALIZAÇÃO DA APLICAÇÃO
window.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('millerContainer')) {
        renderColumn(acervoData, 0, 'millerContainer');
    }
    if (document.getElementById('galeriaContainer')) {
        renderColumn(galeriaData, 0, 'galeriaContainer');
    }
});

/**
 * 5. FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO DAS COLUNAS
 */
function renderColumn(dataObject, level, containerId = 'millerContainer') {
    const container = document.getElementById(containerId);
    if (!container) return;

    while (container.children.length > level + 1) {
        container.removeChild(container.lastChild);
    }

    const currentList = document.getElementById(`list-${level}`);
    if (!currentList) return;
    currentList.innerHTML = '';

    const keysToRender = dataObject.items ? dataObject.items : dataObject;

    Object.keys(keysToRender).forEach(key => {
        if (key === 'description') return;

        const value = keysToRender[key];
        const li = document.createElement('li');
        const isFinalLink = typeof value === 'string';

        li.innerHTML = `<span class="miller-item-text">${key}</span>`;

        if (isFinalLink) {
            li.onclick = (e) => {
                e.stopPropagation();
                window.open(value, '_blank');
            };
        } else {
            li.onclick = (e) => {
                if (li.classList.contains('active')) {
                    li.classList.remove('active');
                    clearDescription();
                    while (container.children.length > level + 1) {
                        container.removeChild(container.lastChild);
                    }
                    return; 
                }

                Array.from(currentList.children).forEach(el => el.classList.remove('active'));
                li.classList.add('active');

                let descText = null;
                if (value && typeof value === 'object') {
                    descText = value.description || null;
                }

                if (descText) showDescription(descText);
                else clearDescription();

                createNextColumn(level + 1, containerId);
                renderColumn(value, level + 1, containerId);

                // AUTOMATIZAÇÃO MOBILE: Rolar suavemente para a nova coluna
                setTimeout(() => {
                    const nextColumn = document.getElementById(`col-${level + 1}`);
                    if (nextColumn) {
                        if (window.innerWidth <= 768) {
                            nextColumn.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        } else {
                            nextColumn.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
                        }
                    }
                }, 100);
            };
        }
        currentList.appendChild(li);
    });
}

/**
 * 6. FUNÇÃO PARA CRIAR A PRÓXIMA COLUNA NO DOM
 */
function createNextColumn(level, containerId = 'millerContainer') {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!document.getElementById(`col-${level}`)) {
        const colDiv = document.createElement('div');
        colDiv.className = 'miller-column';
        colDiv.id = `col-${level}`;

        const headerTitle = headerNames[level] || `Nível ${level + 1}`;
        colDiv.innerHTML = `
            <div class="miller-header">${headerTitle}</div>
            <ul class="miller-list" id="list-${level}"></ul>
        `;
        container.appendChild(colDiv);
    }
}

/**
 * 7. FUNÇÕES DE DESCRIÇÃO
 */
function showDescription(text) {
    let detailsBox = document.getElementById('millerDetails');
    if (!detailsBox) return;
    detailsBox.innerHTML = `<strong>Descrição:</strong> ${text}`;
    detailsBox.style.display = 'block';
}

function clearDescription() {
    const detailsBox = document.getElementById('millerDetails');
    if (detailsBox) {
        detailsBox.style.display = 'none';
        detailsBox.innerHTML = '';
    }
}

// ==========================================
// MESTRE: MENU RESPONSIVO + LÓGICA DO ACERVO + VOLTAR AO TOPO
// ==========================================
document.addEventListener("DOMContentLoaded", function() {
    const headerContainer = document.querySelector('.header-container');
    const navWrap = document.querySelector('.nav-wrap');
    const acervoItem = document.querySelector('.mega-dropdown');
    const acervoLink = document.querySelector('.mega-dropdown > a');

    // --- FUNÇÃO PARA RESETAR O ACERVO E FECHAR A CAIXA ---
    function resetarMenuAcervo() {
        if (acervoItem) acervoItem.classList.remove('menu-ativo');
        const container = document.getElementById('millerContainer');
        if (container) {
            while (container.children.length > 1) {
                container.removeChild(container.lastChild);
            }
            const list0 = document.getElementById('list-0');
            if (list0) Array.from(list0.children).forEach(el => el.classList.remove('active'));
            if (typeof clearDescription === 'function') clearDescription();
        }
    }

    if (headerContainer && navWrap) {
        // 1. Cria a sombra escura da tela (overlay)
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);

        // A LOGO EXTRA FOI REMOVIDA DAQUI!

        // 2. Cria o botão Hambúrguer
        const mobileBtn = document.createElement('button');
        mobileBtn.className = 'mobile-menu-btn';
        mobileBtn.innerHTML = '☰'; 
        headerContainer.insertBefore(mobileBtn, navWrap);

        // 3. Função para abrir/fechar o menu vertical
        function toggleMenu() {
            navWrap.classList.toggle('menu-aberto');
            overlay.classList.toggle('ativo');

            if (navWrap.classList.contains('menu-aberto')) {
                mobileBtn.innerHTML = '✖'; 
                document.body.style.overflow = 'hidden'; // Trava a tela de fundo
            } else {
                mobileBtn.innerHTML = '☰'; 
                document.body.style.overflow = ''; // Destrava a tela
                resetarMenuAcervo(); // Limpa o acervo toda vez que o menu fecha
            }
        }

        mobileBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu); // Clicou no fundo escuro, fecha tudo
    }

// --- Lógica do clique na palavra "Acervo" no menu ---
    if (acervoLink && acervoItem) {
        acervoLink.addEventListener('click', function(e) {
            e.preventDefault(); 
            e.stopPropagation();
            
            // Liga e desliga a classe que trava o menu aberto
            acervoItem.classList.toggle('menu-ativo'); 
            
            if(!acervoItem.classList.contains('menu-ativo') && typeof resetarMenuAcervo === 'function') {
                resetarMenuAcervo();
            }
        });

        // Impede que clicar dentro da caixa branca feche o menu sem querer
        const megaMenuBox = document.querySelector('.mega-menu');
        if (megaMenuBox) {
            megaMenuBox.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }

        // Se o usuário clicar em qualquer outro lugar do site, o menu fecha
        document.addEventListener('click', function(e) {
            if (!acervoItem.contains(e.target) && acervoItem.classList.contains('menu-ativo')) {
                acervoItem.classList.remove('menu-ativo');
                if(typeof resetarMenuAcervo === 'function') resetarMenuAcervo();
            }
        });
    }

    // --- BOTÃO VOLTAR AO TOPO ---
    const btnTopo = document.createElement('button');
    btnTopo.className = 'btn-voltar-topo';
    btnTopo.innerHTML = '↑';
    btnTopo.title = 'Voltar ao topo';
    document.body.appendChild(btnTopo);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) btnTopo.classList.add('mostrar');
        else btnTopo.classList.remove('mostrar');
    });

    btnTopo.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// =========================================
// SISTEMA DE MODAL FLUTUANTE DE NOTÍCIAS + CARROSSEL
// =========================================
let fotosAtuais = [];
let fotoIndexAtual = 0;

function abrirNoticia(dados) {
    const modal = document.getElementById('modalNoticia');
    if (!modal) return;

    // 1. Preenche Título, Categoria e Data
    document.getElementById('modalCategoria').innerText = dados.categoria || 'NOTÍCIA';
    document.getElementById('modalTitulo').innerText = dados.titulo;
    document.getElementById('modalData').innerText = dados.data || '';

    // 2. Preenche o Texto Ampliado (se for um array de parágrafos ou string)
    const containerTexto = document.getElementById('modalTexto');
    if (Array.isArray(dados.texto)) {
        containerTexto.innerHTML = dados.texto.map(p => `<p>${p}</p>`).join('');
    } else {
        containerTexto.innerHTML = `<p>${dados.texto}</p>`;
    }

    // 3. Configura o Carrossel de Fotos
    fotosAtuais = dados.fotos || [];
    fotoIndexAtual = 0;
    
    const carrosselArea = document.getElementById('modalCarrossel');
    if (fotosAtuais.length > 0) {
        carrosselArea.style.display = 'block';
        atualizarCarrossel();
    } else {
        carrosselArea.style.display = 'none'; // Esconde se não tiver foto
    }

    // 4. Abre o Modal e trava a rolagem do fundo
    modal.classList.add('ativo');
    document.body.style.overflow = 'hidden';
}

function fecharNoticia() {
    const modal = document.getElementById('modalNoticia');
    if (modal) {
        modal.classList.remove('ativo');
        document.body.style.overflow = ''; // Destrava a tela
    }
}

function mudarFoto(direcao) {
    if (fotosAtuais.length <= 1) return;
    fotoIndexAtual = (fotoIndexAtual + direcao + fotosAtuais.length) % fotosAtuais.length;
    atualizarCarrossel();
}

function atualizarCarrossel() {
    const imgTag = document.getElementById('modalImagem');
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const indicadoresArea = document.getElementById('carrosselIndicadores');

    imgTag.src = fotosAtuais[fotoIndexAtual];

    // Se só tiver 1 foto, esconde os botões de avançar/voltar
    if (fotosAtuais.length <= 1) {
        btnPrev.style.display = 'none';
        btnNext.style.display = 'none';
        indicadoresArea.innerHTML = '';
    } else {
        btnPrev.style.display = 'block';
        btnNext.style.display = 'block';
        
        // Cria as bolinhas (indicadores)
        indicadoresArea.innerHTML = fotosAtuais.map((_, idx) => 
            `<span class="carrossel-dot ${idx === fotoIndexAtual ? 'ativo' : ''}" onclick="irParaFoto(${idx})"></span>`
        ).join('');
    }
}

function irParaFoto(idx) {
    fotoIndexAtual = idx;
    atualizarCarrossel();
}

// FECHAR AO CLICAR FORA DA CAIXA OU PRESSIONAR ESC
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modalNoticia');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) fecharNoticia();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') fecharNoticia();
    });
});
