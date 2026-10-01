import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import styles from './Labs.module.css'

function previewUrl(id) {
    return `https://docs.google.com/document/d/${id}/preview`
}

function drivePreviewUrl(id) {
    return `https://drive.google.com/file/d/${id}/preview`
}

const members = [
    {
        id: 'sam',
        name: 'Sam Garden',
        docs: [
            { id: 'draft-1', label: 'Lab 1 Draft 1', src: previewUrl('1Sh3l6Ga2NXWYO-WTCI0laZXqIUxopPS5') },
            { id: 'draft-2', label: 'Lab 1 Draft 2', src: previewUrl('1-ZvaDI_FVk02Xbvkyj_ZfCXcCFrXLvGT') },
            { id: 'draft-3', label: 'Lab 1 Draft 3', src: previewUrl('1y1LV2bwkd_WuqcyTDGkGsYmzgXAl2Vxg') },
            { id: 'version-1', label: 'Lab 1 Version 1', src: previewUrl('1w01HohQk4ZhfxPNVoxpM1QEi7F6tDI-6') },
        ],
    },
    {
        id: 'stone',
        name: 'Stone Casey',
        docs: [
            { id: 'draft-1', label: 'Lab 1 Draft 1', src: previewUrl('1_T0JyzeUsnZWzrQKN-soFEeNh8jjI5oD') },
            { id: 'draft-2', label: 'Lab 1 Draft 2', src: previewUrl('1X-tvWt1AsF5VgMmAv4wGbxF-yiy7k5I7') },
            { id: 'draft-3', label: 'Lab 1 Draft 3', src: previewUrl('1tp_g57nqGVi8ea1JwgFIp0Pibbjv99vY') },
            { id: 'version-1', label: 'Lab 1 Version 1', src: previewUrl('1F-0aYt5Mkj8ke7GwYXXrcHfJqpof4yu8') },
        ],
    },
    {
        id: 'blaine',
        name: 'Blaine Langlois',
        docs: [
            { id: 'draft-1', label: 'Lab 1 Draft 1', src: previewUrl('1bmDrHeI6lVfKN3D8HCT24pd3vgKnibFZ') },
            { id: 'draft-2', label: 'Lab 1 Draft 2', src: previewUrl('1KidRH56vA9Qax7Kdt2lMJsB0dtehQI01') },
            { id: 'draft-3', label: 'Lab 1 Draft 3', src: previewUrl('1TVepVngOEQ9LkWp9djDYi1FmzW9RG_HS') },
        ],
    },
    {
        id: 'aaron',
        name: 'Aaron Breslin',
        docs: [
            { id: 'draft-1', label: 'Lab 1 Draft 1', src: previewUrl('1ZCSL57QSROCxhbQwGWn6WRfBQguExT7d') },
            { id: 'draft-2', label: 'Lab 1 Draft 2', src: previewUrl('1gj9BFiw0uBd06iteTSkayPTto3gx6IFO') },
            { id: 'draft-3', label: 'Lab 1 Draft 3', src: previewUrl('1GDPzmWmnraaOjdts797_RtkEJNUEzr4u') },
            { id: 'version-1', label: 'Lab 1 Version 1', src: previewUrl('15OODlCKJBTDNI3JR8Zo5S-IdB5eDYD8B') },
        ],
    },
    {
        id: 'jordan',
        name: 'Jordan Dossou',
        docs: [
            { id: 'draft-1', label: 'Lab 1 Draft 1', src: previewUrl('1TWTn0MUNVXCKJDKgejI1YLVvV3NNfrIu') },
            { id: 'draft-2', label: 'Lab 1 Draft 2', src: previewUrl('1ojGohp9wXSezfPqgCpdXuoH5VWry0HLt') },
            { id: 'draft-3', label: 'Lab 1 Draft 3', src: previewUrl('1n6_Zgbq2Ehf5TTHd-DCJZNwBIoORkN96') },
            { id: 'version-1', label: 'Lab 1 Version 1', src: previewUrl('1zbDkqIdBVCmRuksGgVZgGK7kwucW-ALJ') },
        ],
    },
    {
        id: 'joshua',
        name: 'Joshua Harris',
        docs: [
            { id: 'draft-1', label: 'Lab 1 Draft 1', src: drivePreviewUrl('1iEPhWOaCBNjop-XyAcMo5hLmtk5-OQKJ') },
            { id: 'draft-2', label: 'Lab 1 Draft 2', src: drivePreviewUrl('1qmDLuWS7QMS63kLAbT7pF2uh3ndoS-e4') },
            { id: 'draft-3', label: 'Lab 1 Draft 3', src: drivePreviewUrl('14yaF7BY0PcbnRUkxS4tmI-0xvZv_nTlB') },
            { id: 'version-1', label: 'Lab 1 Version 1', src: drivePreviewUrl('1OPavAu6iFqR4Ss3MSJpMeJhNU6Pbivx-') },
        ],
    },
]

function MemberLabs({ member }) {
    const [selectedId, setSelectedId] = useState('')
    const selected = member.docs.find((doc) => doc.id === selectedId)

    return (
        <section id={member.id} className={styles.card}>
            <div className={styles.cardHeader}>
                <div>
                    <h3 className={styles.name}>{member.name}</h3>
                    <p className={styles.hint}>Choose a lab version to open it below</p>
                </div>
                <label className={styles.selectLabel}>
                    <span className={styles.srOnly}>{member.name} lab version</span>
                    <select
                        className={styles.select}
                        value={selectedId}
                        onChange={(event) => setSelectedId(event.target.value)}
                    >
                        <option value="">Select a version</option>
                        {member.docs.map((doc) => (
                            <option key={doc.id} value={doc.id}>{doc.label}</option>
                        ))}
                    </select>
                </label>
            </div>
            {selected ? (
                <div className={styles.docIframe}>
                    <iframe
                        key={selected.src}
                        src={selected.src}
                        title={`${member.name} — ${selected.label}`}
                        allowFullScreen
                    />
                </div>
            ) : (
                <p className={styles.placeholder}>Select a lab version to view the document.</p>
            )}
        </section>
    )
}

export default function Labs() {
    return (
        <>
            <PageHeader
                title="Labs"
                subtitle="Team Iron lab documentation and deliverables"
            />

            <div className={styles.wrapper}>
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Lab 1</h2>
                    {members.map((member) => (
                        <MemberLabs key={member.id} member={member} />
                    ))}
                </section>
            </div>
        </>
    )
}
