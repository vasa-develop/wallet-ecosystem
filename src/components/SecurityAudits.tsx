import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DataTable from './DataTable';

export default function SecurityAudits({
  audits,
  bug_bounties,
}: {
  audits: any;
  bug_bounties: any;
}) {
  return (
    <Tabs defaultValue="audits">
      <TabsList>
        <TabsTrigger value="audits">Audits</TabsTrigger>
        <TabsTrigger value="bug_bounty">Bug Bounty</TabsTrigger>
      </TabsList>
      <TabsContent value="audits">
        <p>
          Audits in Web3 refer to the process of conducting comprehensive
          security assessments and evaluations of blockchain-based projects,
          smart contracts, decentralized applications (dApps), and other Web3
          protocols. The purpose of these audits is to identify vulnerabilities,
          potential risks, and weaknesses in the code and system architecture to
          enhance security, reliability, and trustworthiness.
        </p>
        <DataTable
          caption=""
          columns={[
            'Auditor',
            'Date',
            'Audited Version',
            'Current Version',
            'Audit Relevance',
            'Audit Report',
          ]}
          data={audits}
        />
      </TabsContent>
      <TabsContent value="bug_bounty">
        <p>
          A bug bounty program in Web3 is an initiative offered by blockchain
          projects, cryptocurrency platforms, or decentralized applications
          (dApps) to incentivize security researchers and ethical hackers to
          discover and report vulnerabilities or bugs in their systems. It is a
          crowdsourced approach to security testing where individuals or teams
          are rewarded for responsibly disclosing vulnerabilities they find.
        </p>
        <DataTable
          caption=""
          columns={['Platform', 'Reward', 'Status', 'Scope']}
          data={bug_bounties}
        />
      </TabsContent>
    </Tabs>
  );
}
