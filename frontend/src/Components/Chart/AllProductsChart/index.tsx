import './style.css';

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react';

import { AllProductsData } from '../../../data/dados';
import GraphBar from './graph';
import { GraphPercentage } from './percentage';

const AllProductsChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] lg:w-[450px] bg-white rounded">
      <TableContainer
      component={Paper}
      sx={{
        overflow: "hidden",
        height: '300px',
      }}>
      <h1 className="pl-4 font-bold text-text pt-2 ">Top Produtos</h1>
      <Table stickyHeader aria-label="tabela de todos os produtos">
        <TableHead>
          <TableRow>
            {AllProductsData.data.datasets.map((dataset) => (
              <TableCell  style={{ fontWeight: 'normal', color: '#94A3B8' }}>
                {dataset.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {AllProductsData.data.datasets.map((dataset, index) => (
            <TableRow key={index}>
              <TableCell>{dataset.index}</TableCell>
              <TableCell>{dataset.product}</TableCell>
              <TableCell>
                <GraphBar
                  percentageData={dataset.percentage}
                  graphBarColor={dataset.graphBarColor}
                  graphBarBackground={dataset.graphBarBackground}
                />
              </TableCell>
              <TableCell>
                <GraphPercentage 
                  percentageData={dataset.percentage}
                  borderColor={dataset.graphPercentageBorder}
                  background={dataset.graphPercentageBackground}
                  textColor={dataset.percentageTextColor}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    
  );
};

export default AllProductsChart;
