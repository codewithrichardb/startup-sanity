export type LogType = 'gossip' | 'gaslighting' | 'micromanagement' | 'overwork' | 'unclear feedback' | 'favoritism'

export interface LogEntry {
    _id?: string;
    userId: string;
    type: LogType;
    description?: string;
    tags?: string[];
    createdAt: string
}