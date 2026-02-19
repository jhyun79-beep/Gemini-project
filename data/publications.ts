export interface Publication {
    id: number;
    authors: string;
    title: string;
    journal: string;
    year: string;
    volume?: string;
    pages?: string;
    doi?: string;
}

export const publications: Publication[] = [
    {
        id: 68,
        authors: "Moo Hyun Kim, Ju-Young Kim, Jaemog Jung, Jungsu David Lah, Heehun Kim, Yong Won Kwon, Jinwoo Cheon, Jang-Ung Park*, Jae-Hyun Lee*",
        title: "Large-Scale and High-Resolution Patterning of Magnetic Liquid Metal Nanohybrid for Stretchable Circuits",
        journal: "ACS Nano",
        year: "2026",
        doi: "doi.org/10.1021/acsnano.5c12929"
    },
    {
        id: 67,
        authors: "Sunghwi Kang, Gooreum Kim, Jinwoo Cheon*, Jae-Hyun Lee*",
        title: "Corrugated-Surface Goethite Nanoparticles with Reduced Magnetization and Increased Surface Area for Enhanced T1 MRI Contrast Effect",
        journal: "ACS Appl. Mater. Interface",
        year: "2025",
        volume: "17",
        pages: "66450"
    },
    {
        id: 66,
        authors: "Ju-Young Kim, Heehun Kim, Moo Hyun Kim, Ri Yu, Gooreum Kim, Junghoon Kim, Jinho Jang, Daeho Jeong, Seung-Woo Cho, Jinwoo Cheon*, Jae-Hyun Lee*",
        title: "Magnetically Guided Flexible Bioelectronic Probe for Single-Cell Recordings in Multi-Scale Biosystems",
        journal: "Adv. Mater.",
        year: "2025",
        volume: "38",
        pages: "e11700"
    },
    {
        id: 65,
        authors: "Myoungjae Oh, Enji Kim, Seo-Hyun Choi, Jaegyeong Lee, Somin Lee, Jakyoung Lee, Jangwon Lee, Jae-Hyun Lee, Minsuk Kwak*, Jang-Ung Jang*",
        title: "Electromagnetic Interference-Shielded Graphene-Copper Neural Interface for Real-Time Electrophysiology Under Magnetic Modulation",
        journal: "ACS Nano",
        year: "2025",
        volume: "19",
        pages: "39464"
    },
    {
        id: 64,
        authors: "Abdullah Ahmed, ... , Jae-Hyun Lee, ... , Wolfgang J. Parak*",
        title: "Interfacing with the Brain: How Nanotechnology Can Contribute",
        journal: "ACS Nano",
        year: "2025",
        volume: "19",
        pages: "10630"
    },
    {
        id: 63,
        authors: "Enji Kim, Eunseon Jeong, Yeon-Mi Hong, Inhea Jeong, Junghoon Kim, Yong Won Kwon, Young-Geun Park, Jiin Lee, Suah Choi, Ju-Young Kim, Jae-Hyun Lee*, Seung-Woo Cho*, Jang-Ung Park*",
        title: "Magnetically reshapable 3D multi-electrode arrays of liquid metals for electrophysiological analysis of brain organoids",
        journal: "Nat. Comm.",
        year: "2025",
        volume: "16",
        pages: "2011"
    },
    {
        id: 62,
        authors: "Moohyun Kim, Eun Je Jeon, Won Gi Chung, Heehun Kim, Enji Kim, Sanghoon Lee, Jae Hyun Lee*, Seung-Woo Cho*, Jang-Ung Park*",
        title: "3D Soft Liquid Metal Electrodes for High-resolution and Long-term Electromyography in Muscle Trauma Assessment",
        journal: "Adv. Mater.",
        year: "2025",
        volume: "37",
        pages: "2419250"
    },
    {
        id: 61,
        authors: "Jiyong Cheong, Ala Jo, Jangwon Lee, Sujin Lee, Jung-uk Lee, Jae-Hyun Lee, Hakho Lee*, and Jinwoo Cheon*",
        title: "Engineered Nanoparticles for Clinical Assays",
        journal: "Nat. Rev. Bioeng.",
        year: "2024",
        volume: "2",
        pages: "887"
    },
    {
        id: 60,
        authors: "Seo-Hyun Choi, Jihye Shin, Chanhyun Park, Jung-uk Lee, Jaegyeong Lee, Yuko Ambo, Wookjin Shin, Ri Yu, Ju-Young Kim, Jungsu David Lah, Donghun Shin, Gooreum Kim, Kunwoo Noh, Wuhyun Koh, C. Justin Lee, Jae-Hyun Lee*, Minsuk Kwak*, and Jinwoo Cheon*",
        title: "In Vivo Magnetogenetics for Cell-type-Specific Targeting and Modulation of Brain Circuits",
        journal: "Nat. Nanotechnol.",
        year: "2024",
        volume: "19",
        pages: "1333"
    },
    {
        id: 59,
        authors: "Mouhong Lin, Jung-uk Lee, Youngjoo Kim, Gooreum Kim, Yunmin Jung, Ala Jo, Mansoo Park, Sol Lee, Jungsu David Lah, Jongseong Park, Kunwoo Noh, Jae-Hyun Lee, Minsuk Kwak, Dominik Lungerich*, and Jinwoo Cheon*",
        title: "A Magnetically Powered Nanomachine with a DNA Clutch",
        journal: "Nat. Nanotechnol.",
        year: "2024",
        volume: "19",
        pages: "646"
    },
    {
        id: 58,
        authors: "Wookjin Shin, Yeongdo Lee, Jueun Lim, Youbin Lee, Jungsu David Lah, Somin Lee, Jung-uk Lee, Ri Yu, Phil Hyu Lee, Jae-Hyun Lee, Minsuk Kwak*, and Jinwoo Cheon*",
        title: "Nanoscale Magneto-mechanical-genetics of Deep Brain Neurons Reversing Motor Deficits in Parkinsonian Mice",
        journal: "Nano Lett.",
        year: "2024",
        volume: "24",
        pages: "270"
    },
    {
        id: 57,
        authors: "Young-Geun Park, Yong Won Kwon, Chin Su Koh, Enji Kim, Dong Ha Lee, Sumin Kim, Jongmin Mun, Yeon-Mi Hong, Sanghoon Lee, Ju-Young Kim, Jae-Hyun Lee, Hyun Ho Jung*, Jinwoo Cheon*, Jin Woo Chang*, and Jang-Ung Park*",
        title: "In-Vivo Integration of Soft Neural Probes Through High-Resolution Printing of Liquid Electronics on the Cranium",
        journal: "Nat. Commun.",
        year: "2024",
        volume: "15",
        pages: "1772"
    },
    {
        id: 56,
        authors: "Whee-Soo Kim, Sungjin Min, Su Kyeom Kim, Sunghwi Kang, Soohwan An, Ernesto Criado-Hidalgo, Hunter Davis, Avinoam Bar-Zion, Dina Malounda, Yu Heun Kim, Jae-Hyun Lee, Soo Han Bae, Jin Gu Lee, Minsuk Kwak, Seung-Woo Cho*, Mikhail G. Shapiro*, and Jinwoo Cheon*",
        title: "Magneto-Acoustic Protein Nanostructures for Non-Invasive Imaging of Tissue Mechanics In Vivo",
        journal: "Nat. Mater.",
        year: "2023",
        volume: "23",
        pages: "290"
    }
];